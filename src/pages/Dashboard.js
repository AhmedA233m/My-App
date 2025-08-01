import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar.js";
import TopNav from "../components/TopNav.js";
import Cards from "../components/Cards.js";
import ChartSection from "../components/ChartSection.js";
import RecentActivity from "../components/RecentActivity.js";
import "../styles/Dashboard/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If token is missing, redirect to home
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content" style={{ padding: "40px 70px" }}>
        {/* Top Navigation */}
        <TopNav />

        {/* Welcome Text */}
        <div className="welcome-text">
          <h2>Welcome Back, Ahmed!</h2>
        </div>

        {/* Cards Section */}
        <Cards />

        {/* Chart Section */}
        <ChartSection />

        {/* Recent Activity Section */}
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
