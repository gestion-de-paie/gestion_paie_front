import { useState, useEffect } from 'react';

export default function Modal({ isOpen, onClose, mode, onSubmit, selectedEmploye }) {
  const [formData, setFormData] = useState({
    Nom: '',
    Prenom: '',
    Date_Embauche: '',
    ID_Fonction: '',
    ID_Methode_Paiment: '',
    HeuresTravaillees: ''
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && selectedEmploye) {
        const newFormData = {
          Nom: selectedEmploye.Nom || '',
          Prenom: selectedEmploye.Prenom || '',
          Date_Embauche: selectedEmploye.Date_Embauche || '',
          ID_Fonction: selectedEmploye.ID_Fonction || '',
          ID_Methode_Paiment: selectedEmploye.ID_Methode_Paiment || '',
          HeuresTravaillees: selectedEmploye.HeuresTravaillees?.toString() || ''
        };
        setFormData(newFormData);
        validateForm(newFormData);
      } else {
        const resetForm = {
          Nom: '',
          Prenom: '',
          Date_Embauche: '',
          ID_Fonction: '',
          ID_Methode_Paiment: '',
          HeuresTravaillees: ''
        };
        setFormData(resetForm);
        validateForm(resetForm);
      }
    }
  }, [isOpen, mode, selectedEmploye]);

  const validateForm = (data) => {
    const valid =
      data.Nom.trim() !== '' &&
      data.Prenom.trim() !== '' &&
      data.Date_Embauche.trim() !== '' &&
      data.ID_Fonction !== '' &&
      data.ID_Methode_Paiment !== '' &&
      data.HeuresTravaillees !== '';
    setIsValid(valid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    validateForm(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    const heures = parseFloat(formData.HeuresTravaillees);
    const heuresSupp = Math.max(0, heures - 40);

    const employeComplet = {
      ...formData,
      HeuresTravaillees: heures,
      HeuresSupplementaires: heuresSupp
    };

    try {
      await onSubmit(employeComplet);
      onClose();
    } catch (error) {
      console.error("Erreur soumission:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box relative">
        <button 
          onClick={onClose}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="text-lg font-bold mb-4">
          {mode === "edit" ? "Modifier un employé" : "Ajouter un employé"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Nom */}
          <div className="form-control">
            <label className="label" title="Ex : Rakoto">
              <span className="label-text">Nom*</span>
            </label>
            <input
              type="text"
              name="Nom"
              value={formData.Nom}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Prénom */}
          <div className="form-control">
            <label className="label" title="Ex : Jean">
              <span className="label-text">Prénom*</span>
            </label>
            <input
              type="text"
              name="Prenom"
              value={formData.Prenom}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Date d'embauche */}
          <div className="form-control">
            <label className="label" title="Date d'entrée dans l'entreprise">
              <span className="label-text">Date d'embauche*</span>
            </label>
            <input
              type="date"
              name="Date_Embauche"
              value={formData.Date_Embauche}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Fonction (select) */}
          <div className="form-control">
            <label className="label" title="Fonction de l'employé">
              <span className="label-text">Fonction*</span>
            </label>
            <select
              name="ID_Fonction"
              value={formData.ID_Fonction}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>Choisir une fonction</option>
              <option value="Développeur">Développeur</option>
              <option value="Designer">Designer</option>
              <option value="RH">RH</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          {/* Méthode de Paiement (select) */}
          <div className="form-control">
            <label className="label" title="Mode de versement du salaire">
              <span className="label-text">Méthode de Paiement*</span>
            </label>
            <select
              name="ID_Methode_Paiment"
              value={formData.ID_Methode_Paiment}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>Choisir une méthode</option>
              <option value="Virement">Virement</option>
              <option value="Chèque">Chèque</option>
              <option value="Espèce">Espèce</option>
            </select>
          </div>

          {/* Heures travaillées */}
          <div className="form-control">
            <label className="label" title="Nombre total d'heures travaillées cette semaine">
              <span className="label-text">Heures travaillées*</span>
            </label>
            <input
              type="number"
              name="HeuresTravaillees"
              value={formData.HeuresTravaillees}
              onChange={handleChange}
              className="input input-bordered w-full"
              min={0}
              required
            />
          </div>

          {/* Soumettre */}
          <button 
            type="submit" 
            className="btn btn-primary w-full mt-6"
            disabled={!isValid}
          >
            {mode === "edit" ? "Enregistrer" : "Créer"}
          </button>
        </form>
      </div>
    </div>
  );
}
