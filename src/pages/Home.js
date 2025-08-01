import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import AuthForm from "./AuthForm.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("signup");
  const [slideClass, setSlideClass] = useState(""); // "" | slide-in | slide-out
  const navigate = useNavigate();

  // ✅ Redirect to /dashboard if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const openForm = (type) => {
    setFormType(type);
    setShowForm(true);
    setSlideClass(""); // reset to default
  };

  useEffect(() => {
    // Add slide-in class one frame after render
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
    }, 400); // match with CSS duration
  };

  return (
    <div className="home-container">
      <div className="top-right-buttons">
        <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button>
        <button className="signup-btn" onClick={handleSignupClick}>
          Signup
        </button>
      </div>

      <div className="company-name">
        <h1>My-App</h1>
      </div>

      {showForm && (
        <div className={`auth-panel ${slideClass}`}>
          <button className="close-btn" onClick={handleCloseForm}>
            &times;
          </button>
          <AuthForm formType={formType} setFormType={setFormType} />
        </div>
      )}
    </div>
  );
};

export default Home;
