import React from "react";
import "../style/Welcome.css";
import Register from "../components/Register";
import "../style/LoginPage.css";

const RegisterPage = () => {
  return (
    <main>
      <div className="login-container">
        <div className="login-card">
          <div className="left-section">
          <img className="kep" src="../../public/photos/login.jpg" alt="login" />
          </div>
          <div className="right-section">
            <Register />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
