import React, { useContext } from "react";
import "../style/Profil.css";
import { AppContext } from "../Context/AppContext";

function ProfilNavigation() {
  const { user } = useContext(AppContext);
  return (
    <nav className="profil-navigacio">
      <ul>
        <div>
          <h1>{user?.name}</h1>
        </div>
        <li className="passive">
          <a href="/profile/modify">Profilom szerkesztése</a>
        </li>
        <li className="passive">
          <a href="/profile/events">Minden eseményem</a>
        </li>
        <li className="passive">
          <a href="/stats">Statisztika</a>
        </li>
        <li className="passive">
          <a href="/settings">Beállítások</a>
        </li>
      </ul>
    </nav>
  );
}

export default ProfilNavigation;
