import React from "react";
import "../style/Profil.css";

function Profil() {
  return (
    <>
      <div className="kulso">
        <div className="kozepso">
          <nav className="profil-navigacio">
            <ul>
              <li>
                <a href="">Profilom szerkesztése</a>
              </li>
              <li>
                <a href="">Minden eseményem</a>
              </li>
              <li>
                <a href="">Statisztika</a>
              </li>
              <li>
                <a href="">Beállítások</a>
              </li>
            </ul>
          </nav>
          
          <div className="belso">
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Profil;
