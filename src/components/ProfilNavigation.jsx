import React from 'react'
import "../style/Profil.css";

function ProfilNavigation() {
  return (
    <nav className="profil-navigacio">
    <ul>
      <div><h1>Név</h1></div>
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
  )
}

export default ProfilNavigation