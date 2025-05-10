import React from "react";
import { Link } from "react-router-dom";
import "../style/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Az oldal nem található.</p>
      <Link to="/" className="home-link">Vissza a kezdőlapra</Link>
    </div>
  );
}