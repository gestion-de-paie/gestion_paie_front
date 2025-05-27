// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Bienvenue sur Gestion de Paie</h1>
      <p>Gérez vos employés et les paiements facilement.</p>
      <Link to="/login" style={{ color: '#007bff' }}>Se connecter</Link>
    </div>
  );
}
