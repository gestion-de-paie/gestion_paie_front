// Dans Navbar.js
export default function Navbar({onOpen}) {  // Retirez onSearch
    return (
            <div className="navbar-start">
  <button
    className="btn btn-primary gap-2"
    onClick={onOpen}
    title="Ajouter un nouvel employé"
    aria-label="Ajouter un employé"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
    Ajouter un employé
  </button>
</div>
 
    )
}