import React from "react";
import Galery from "../components/Galery";
import Register from "../components/Register";
import "../style/Welcome.css";

const WelcomeRegister = () => {
  return (
    <div className="welcomeR">
      <div className="galeria ">
        <Galery />
      </div>
      <div className="register">
        <Register />
      </div>
    </div>
  );
};

export default WelcomeRegister;
