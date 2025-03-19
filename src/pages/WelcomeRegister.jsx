import React from "react";
import Galery from "../components/Galery";
import Register from "../components/Register";

const WelcomeRegister = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-start"
      style={{ minHeight: "100vh" }}
    >
      <div className="flex-grow-1">
        <Galery />
      </div>
      <div
        className="register-container"
        style={{
          width: "500px",
          minWidth: "250px",
          position: "sticky",
          top: "20px",
        }}
      >
        <Register />
      </div>
    </div>
  );
};

export default WelcomeRegister;
