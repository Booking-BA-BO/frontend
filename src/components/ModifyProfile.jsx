import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../style/ModifyProfile.css";

function ModifyProfile() {
  const { user } = useContext(AppContext);

  const formatDate = (iso) => {
    const date = new Date(iso);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

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
            <div className="jelszo-valtoztatas-es-utoljara-valtoztatott">
              <h6>Jelszó változtatás</h6>
              <p>Legutóbb változtatva: {formatDate(user.updated_at)}</p>
            </div>
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

  return null;
}

export default ModifyProfile;
