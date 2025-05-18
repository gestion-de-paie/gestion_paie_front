// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import AdminDashboard from '../pages/admin/Dashboard';
import DernierBulletinPaie from '../pages/dernierBulletinPaie.js';
import Employes from  '../components/types/Employes';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/bulletin//" element={<DernierBulletinPaie />} />
      <Route path="/admin/*" element={<AdminDashboard />}>
        <Route path="employes" element={<Employes />} />
      </Route>

    
    </Routes>
  );
}
