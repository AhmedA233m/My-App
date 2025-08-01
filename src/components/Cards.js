// src/components/Cards.js
import React from "react";
import "../styles/Dashboard/Cards.css";
import { FaUsers, FaChartLine, FaDollarSign } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="cards-container fade-in">
      <div className="card">
        <FaUsers className="card-icon" />
        <div className="card-details">
          <h3>Users</h3>
          <p>1,250</p>
        </div>
      </div>
      <div className="card">
        <FaChartLine className="card-icon" />
        <div className="card-details">
          <h3>Sessions</h3>
          <p>320</p>
        </div>
      </div>
      <div className="card">
        <FaDollarSign className="card-icon" />
        <div className="card-details">
          <h3>Revenue</h3>
          <p>$12,400</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
