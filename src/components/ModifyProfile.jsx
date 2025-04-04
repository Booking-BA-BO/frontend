import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../style/ModifyProfile.css";

function ModifyProfile() {
  const { user } = useContext(AppContext);
  if (user?.id) {
    return (
      <div className="profiladatok">
        <h3>Adataim szerkesztése</h3>
        <div className="profil-szerkesztes">
          <h2>AZ ÉN SZEMÉLYES OLDALAM: http://localhost:5173/{user.egyeni_vegpont}</h2>
          <h6>Felhasználó név</h6>
          <p>
            {user.name}
            <button className="modify-gomb">✏️</button>
          </p>
          <h6>Email cím</h6>
          <p>
            {user.email}
            <button className="modify-gomb">✏️</button>
          </p>
          <h6>Teljes név:</h6>
          <p>
            {user.vezetek_nev} {user.kereszt_nev}
            <button className="modify-gomb">✏️</button>
          </p>
          <h6>Telefon szám:</h6>
          <p>
            {user.telefon}
            <button className="modify-gomb">✏️</button>
          </p>
            <h6></h6>
          <div className="jelszo-valtoztatas-div">
            <h6>Jelszó változtatás</h6>
            <form action="">
              <div className="jelszo-valtoztatas-form">
                <div>
                  <label htmlFor="">Jelenlegi jelszó:</label>
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Új jelszó:</label>
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Új jelszó mégegyszer:</label>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <button className="jelszo-valtoztatas-gomb">Jelszó módosítása</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModifyProfile;
