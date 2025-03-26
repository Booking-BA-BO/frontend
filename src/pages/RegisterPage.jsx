import React from "react";
import "../style/Welcome.css";
import Register from "../components/Register";

const RegisterPage = () => {
  return (
    <div className="welcome-container">
      <div className="left-section">
      </div>
      <div className="right-section">
        <Register/>
      </div>
    </div>
  );
};

export default RegisterPage;
