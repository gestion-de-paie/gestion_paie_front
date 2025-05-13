// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import AdminDashboard from '../pages/admin/Dashboard';
import DernierBulletinPaie from '../pages/dernierBulletinPaie.js';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/bulletin//" element={<DernierBulletinPaie />} />
    
    </Routes>
  );
}
