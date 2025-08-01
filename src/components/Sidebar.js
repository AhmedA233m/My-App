import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../styles/Dashboard/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home/login
  };

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-title">YourCompany</div>
        <ul className="sidebar-links">
          <li>
            <FaHome className="icon" />
            <span>Home</span>
          </li>
          <li>
            <FaChartBar className="icon" />
            <span>Analytics</span>
          </li>
          <li>
            <FaCog className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Logout Option */}
      <div className="sidebar-logout" onClick={handleLogout}>
        <FaSignOutAlt className="icon" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
