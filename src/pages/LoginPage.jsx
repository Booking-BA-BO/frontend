import React from "react";
import Login from "../components/Login";
import "../style/Welcome.css";
import "../style/LoginPage.css";

const LoginPage = () => {
  return (
    <main>
      <div className="login-container">
        <div className="login-card">
          <div className="left-section">
            <img className="kep" src="https://placehold.co/400x500" alt="a" />
          </div>
          <div className="right-section">
            <Login />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
