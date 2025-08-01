import React from "react";
import "../styles/Dashboard/TopNav.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav-icons">
        <FaBell className="icon" title="Notifications" />
        <FaUserCircle className="icon" title="User Profile" />
      </div>
    </div>
  );
};

export default TopNav;
