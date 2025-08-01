// src/components/AuthForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthForm.css";

const AuthForm = ({ formType, setFormType }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    const fname = document.querySelector('input[placeholder="First Name"]').value;
    const lname = document.querySelector('input[placeholder="Last Name"]').value;
    const email = document.querySelector('.signup-form input[placeholder="Email"]').value;
    const password = document.querySelector('.signup-form input[placeholder="Password"]').value;

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fname, lname, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful! Please log in.");
        setFormType("login");
      } else {
        alert(data.detail || "Signup failed");
      }
    } catch (error) {
      alert("Something went wrong during signup.");
      console.error(error);
    }
  };

  const handleLogin = async () => {
    const email = document.querySelector('.login-form input[placeholder="Email"]').value;
    const password = document.querySelector('.login-form input[placeholder="Password"]').value;

    const params = new URLSearchParams();
    params.append("username", email); // FastAPI expects "username"
    params.append("password", password);

    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        navigate("/dashboard");
      } else {
        alert(data.detail || "Login failed");
      }
    } catch (error) {
      alert("Something went wrong during login.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-slider-wrapper">
      <div className={`form-slider ${formType === "login" ? "show-login" : "show-signup"}`}>
        {/* Signup Form */}
        <div className="form-content signup-form">
          <h2>Sign Up</h2>
          <div className="name-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handleSignup}>Register</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setFormType("login")}>Login</span>
          </p>
        </div>

        {/* Login Form */}
        <div className="form-content login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <p>
            Don’t have an account?{" "}
            <span onClick={() => setFormType("signup")}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
