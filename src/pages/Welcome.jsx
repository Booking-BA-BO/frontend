import React from "react";
import Galery from "../components/Galery";
import Login from "../components/Login";
import "../style/Welcome.css";

const Welcome = () => {
  return (
    <div
      className="welcomeL"
    >
      <div className="galeria ">
        <Galery />
      </div>
      <div
        className="login"
      >
        <Login />
      </div>
    </div>
  );
};

export default Welcome;
