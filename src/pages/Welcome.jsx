import React from "react";
import Galery from "../components/Galery";
import Login from "../components/Login";

const Welcome = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-start"
      style={{ minHeight: "100vh" }}
    >
      <div className="flex-grow-1">
        <Galery />
      </div>
      <div
        className="login-container"
        style={{
          width: "500px",
          minWidth: "250px",
          position: "sticky",
          top: "20px",
        }}
      >
        <Login />
      </div>
    </div>
  );
};

export default Welcome;
