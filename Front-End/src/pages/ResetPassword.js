// src/components/ResetPassword.js
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/ResetPassword.css";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing token.");
    }
  }, [token]);

  const handleReset = async () => {
    setMessage("");
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, new_password: newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Password reset successful. Redirecting...");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setError(data.detail || "Reset failed.");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>

      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
