import { useState, useEffect } from 'react';
import Navbar from './components/types/Navbar';
import Tableau from './components/types/Tableau';
import Modal from './components/typesModal';
import { useAlerts } from './components/AlertContext';
import axios from 'axios';

function AppWithAlerts() {
  const { addAlert, AlertsContainer } = useAlerts();
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [employes, setEmployes] = useState([]);
  const [selectedEmploye, setSelectedEmploye] = useState(null);

  // Ici, tu peux soit fetch depuis API, soit utiliser des données statiques
  const fetchEmployes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/employes');
      setEmployes(response.data);
    } catch (error) {
      addAlert("error", "Erreur lors de la récupération des employés");
    }
  };

  useEffect(() => {
    fetchEmployes();
  }, []);

  const handleDeleteSuccess = (id) => {
    setEmployes(prev => prev.filter(emp => emp.ID_Employé !== id));
    addAlert("success", "Employé supprimé avec succès");
  };

  const handleOpen = (mode, employe = null) => {
    setModalMode(mode);
    setSelectedEmploye(employe);
    setIsOpen(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (modalMode === "add") {
        const response = await axios.post('http://localhost:3000/api/employes', formData);
        setEmployes(prev => [...prev, response.data]);
        addAlert("success", "Employé ajouté avec succès");
      } else {
        const response = await axios.put(
          `http://localhost:3000/api/employes/${selectedEmploye.ID_Employé}`, 
          formData
        );
        setEmployes(prev =>
          prev.map(emp =>
            emp.ID_Employé === selectedEmploye.ID_Employé ? response.data : emp
          )
        );
        addAlert("success", "Employé modifié avec succès");
      }
      setIsOpen(false);
    } catch (error) {
      addAlert("error", `Erreur lors de ${modalMode === "add" ? "l'ajout" : "la modification"} de l'employé`);
    }
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} onSearch={setSearchTerm} />

      <div className="flex flex-col h-2/3 w-2/3 mx-auto mt-10">
        <AlertsContainer />

        <Tableau 
          onDeleteSuccess={handleDeleteSuccess}
          handleOpen={handleOpen}
          searchTerm={searchTerm}
          employes={employes}
        />
        
        <Modal 
          isOpen={isOpen}
          onSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
          mode={modalMode}
          selectedEmploye={selectedEmploye}
        />
      </div>
    </>
  );
}

export default AppWithAlerts;
