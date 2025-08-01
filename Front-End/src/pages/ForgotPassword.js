// src/pages/ForgotPassword.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthForm.css"; // Reuse same styles as login/signup

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert(data.detail || "Something went wrong");
      }
    } catch (error) {
      alert("Failed to send request");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-slider-wrapper" style={{ paddingTop: "100px" }}>
      <div className="form-content login-form" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2>Forgot Password</h2>

        {submitted ? (
          <p style={{ color: "green" }}>
            If an account exists for this email, a reset link has been sent.
          </p>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
            <p style={{ marginTop: "10px" }}>
              Go back to{" "}
              <span
                onClick={() => navigate("/")}
                style={{ color: "#007bff", cursor: "pointer" }}
              >
                Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
