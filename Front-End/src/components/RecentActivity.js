// src/components/RecentActivity.js
import React from "react";
import "../styles/Dashboard/RecentActivity.css";

const activityData = [
  { id: 1, time: "10:45 AM", description: "Logged in" },
  { id: 2, time: "11:00 AM", description: "Viewed Dashboard" },
  { id: 3, time: "11:15 AM", description: "Updated profile information" },
  { id: 4, time: "12:00 PM", description: "Checked analytics report" },
];

const RecentActivity = () => {
  return (
    <div className="recent-activity fade-in">
      <h3>Recent Activity</h3>
      <ul>
        {activityData.map((activity) => (
          <li key={activity.id}>
            <span className="time">{activity.time}</span>
            <span className="desc">{activity.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
