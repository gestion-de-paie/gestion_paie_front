import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./dashboard.css"; // le CSS global
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-body">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content">
          {/* Contenu principal ici */}
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
