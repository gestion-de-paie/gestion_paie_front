const Tableau = ({ employes = [], handleOpen, onDeleteSuccess, searchTerm = "" }) => {
  const filterData = employes.filter(emp => {
    if (!searchTerm) return true;
    return (
      emp.Nom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.Prenom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.ID_Employé?.toString().includes(searchTerm) ||
      emp.ID_Fonction?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.ID_Methode_Paiment?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.Date_Embauche?.includes(searchTerm) ||
      emp.HeuresTravaillees?.toString().includes(searchTerm)
    );
  });

  return (
    <div className="overflow-x-auto mt-4">
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Fonction</th>
            <th>Date embauche</th>
            <th>Méthode paiement</th>
            <th title= 'Heures de travailles'>Heures</th>
            <th title= 'Heures Supplementaire'>Heures supp.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map(emp => (
            <tr key={emp.ID_Employé}>
              <td>{emp.Nom}</td>
              <td>{emp.Prenom}</td>
              <td>{emp.ID_Fonction}</td>
              <td>{emp.Date_Embauche}</td>
              <td>{emp.ID_Methode_Paiment}</td>
              <td>{emp.HeuresTravaillees}</td>
              <td>{emp.HeuresSupplementaires}</td>
              <td>
                <button
                  className="btn btn-xs btn-warning mr-2"
                  onClick={() => handleOpen("edit", emp)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-xs btn-error"
                  onClick={() => onDeleteSuccess(emp.ID_Employé)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tableau;
