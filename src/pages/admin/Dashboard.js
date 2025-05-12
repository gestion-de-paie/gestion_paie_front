import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./dashboard.css"; // le CSS global

const Dashboard = () => {
  return (
    <div className="dashboard-body">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content">
          {/* Contenu principal ici */}
          <h2>Bienvenue sur le dashboard ITECH</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
