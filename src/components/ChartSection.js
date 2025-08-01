// src/components/ChartSection.js
import React from "react";
import "../styles/Dashboard/ChartSection.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Example data (replace with API data later)
const data = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 200 },
  { name: "Wed", value: 150 },
  { name: "Thu", value: 280 },
  { name: "Fri", value: 300 },
  { name: "Sat", value: 250 },
  { name: "Sun", value: 180 },
];

const ChartSection = () => {
  return (
    <div className="chart-section fade-in">
      <h3>Weekly Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#007bff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
