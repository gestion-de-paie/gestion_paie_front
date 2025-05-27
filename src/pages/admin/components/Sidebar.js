import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faMoneyBill,
  faCalendarMinus,
  faChartBar,
  faUsers,
  faCog
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button onClick={() => setCollapsed(!collapsed)} className="collapse-btn">
        ☰
      </button>
      {!collapsed && <h2>Gestion de paie</h2>}
      <Link to="/admin/home" className="menu-item">
        <FontAwesomeIcon icon={faHome} className="icon" />
        {!collapsed && <span>Home</span>}
      </Link>
      <Link to="/admin/employes" className="menu-item">
        <FontAwesomeIcon icon={faUser} className="icon" />
        {!collapsed && <span>Employé</span>}
      </Link>
      <Link to="/admin/paie" className="menu-item">
        <FontAwesomeIcon icon={faMoneyBill} className="icon" />
        {!collapsed && <span>Paie</span>}
      </Link>
      <Link to="/admin/conges" className="menu-item">
        <FontAwesomeIcon icon={faCalendarMinus} className="icon" />
        {!collapsed && <span>Congé et absence</span>}
      </Link>
      <Link to="/admin/rapports" className="menu-item">
        <FontAwesomeIcon icon={faChartBar} className="icon" />
        {!collapsed && <span>Rapport</span>}
      </Link>
      <Link to="/admin/charge-sociale" className="menu-item">
        <FontAwesomeIcon icon={faUsers} className="icon" />
        {!collapsed && <span>Charge sociale</span>}
      </Link>
      <Link to="/admin/parametre" className="menu-item">
        <FontAwesomeIcon icon={faCog} className="icon" />
        {!collapsed && <span>Paramètre</span>}
      </Link>
    </aside>
  );
};

export default Sidebar;
