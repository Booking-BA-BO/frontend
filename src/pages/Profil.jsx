import React from "react";
import "../style/Profil.css";

function Profil() {
  return (
    <>
      <div className="kulso">
        <h1>Név / Logo</h1>
        <div className="kozepso">
          <nav className="navigacio">
            <ul>
              <li>
                <a href="">Opcio</a>
              </li>
              <li>
                <a href="">Opcio</a>
              </li>
              <li>
                <a href="">Opcio</a>
              </li>
              <li>
                <a href="">Opcio</a>
              </li>
            </ul>
          </nav>
          <div className="belso">
            <div className="esemenyek">
              <div className="felsoSzoveg">
                <h4>Események</h4>
                <p>
                  <a href="#">Továbbiak</a>
                </p>
              </div>
              <div className="esemenyDobozok">
                <div className="esemeny">EseményDoboz</div>
                <div className="esemeny">EseményDoboz</div>
                <div className="esemeny">EseményDoboz</div>
              </div>
            </div>

            <div className="esemenyek">
              <div className="felsoSzoveg">
                <h4>Események</h4>
                <p>
                  <a href="#">Továbbiak</a>
                </p>
              </div>
              <div className="esemenyDobozok">
                <div className="esemeny">EseményDoboz</div>
                <div className="esemeny">EseményDoboz</div>
                <div className="esemeny">EseményDoboz</div>
              </div>
            </div>
          </div>
{/*           <h6>Kijelentkezés</h6> */}
        </div>

      </div>
    </>
  );
}

export default Profil;
