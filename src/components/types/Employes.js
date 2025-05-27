import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Tableau from "./Tableau";
import Modal from "./Modal";

const Employes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedEmploye, setSelectedEmploye] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [employes, setEmployes] = useState([
    {
      ID_Employé: 1,
      Nom: "Rakoto",
      Prenom: "Jean",
      ID_Fonction: "Développeur",
      Date_Embauche: "2021-01-01",
      ID_Methode_Paiment: "Virement",
      HeuresTravaillees: 45,
      HeuresSupplementaires: 5
    },
    {
      ID_Employé: 2,
      Nom: "Rasoa",
      Prenom: "Marie",
      ID_Fonction: "RH",
      Date_Embauche: "2022-06-15",
      ID_Methode_Paiment: "Chèque",
      HeuresTravaillees: 38,
      HeuresSupplementaires: 0
    }
  ]);

  const handleOpen = (mode, employe = null) => {
    setModalMode(mode);
    setSelectedEmploye(employe);
    setIsOpen(true);
  };

  const handleSubmit = (formData) => {
    const heures = parseFloat(formData.HeuresTravaillees);
    const heuresSupp = Math.max(0, heures - 40);

    const employeComplet = {
      ...formData,
      HeuresTravaillees: heures,
      HeuresSupplementaires: heuresSupp
    };

    if (modalMode === "add") {
      setEmployes(prev => [...prev, employeComplet]);
    } else {
      setEmployes(prev =>
        prev.map(emp =>
          emp.ID_Employé === selectedEmploye.ID_Employé ? employeComplet : emp
        )
      );
    }

    setIsOpen(false);
  };

  const handleDelete = (id) => {
    setEmployes(prev => prev.filter(emp => emp.ID_Employé !== id));
  };

  return (
    <>
      <Navbar onSearch={setSearchTerm} onOpen={() => handleOpen("add")} />
      <Tableau
        employes={employes}
        handleOpen={handleOpen}
        onDeleteSuccess={handleDelete}
        searchTerm={searchTerm}
      />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
        selectedEmploye={selectedEmploye}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Employes;
