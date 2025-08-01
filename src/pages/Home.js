import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import AuthForm from "./AuthForm.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("signup");
  const [slideClass, setSlideClass] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // NEW STATE
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const openForm = (type) => {
    setFormType(type);
    setShowForm(true);
    setSlideClass("");
  };

  useEffect(() => {
    if (showForm) {
      requestAnimationFrame(() => {
        setSlideClass("slide-in");
      });
    }
  }, [showForm]);

  const handleSignupClick = () => openForm("signup");
  const handleLoginClick = () => openForm("login");

  const handleCloseForm = () => {
    setSlideClass("slide-out");
    setTimeout(() => {
      setShowForm(false);
    }, 400);
  };

  return (
    <div className="home-container">
      <div className="top-right-buttons">
        <button className="login-btn" onClick={handleLoginClick}>Login</button>
        <button className="signup-btn" onClick={handleSignupClick}>Signup</button>
      </div>

      <div className="company-name">
        <h1>My-App</h1>
      </div>

      {showForm && (
        <div className={`auth-panel ${slideClass}`}>
          <button className="close-btn" onClick={handleCloseForm}>&times;</button>
          <AuthForm
            formType={formType}
            setFormType={setFormType}
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
