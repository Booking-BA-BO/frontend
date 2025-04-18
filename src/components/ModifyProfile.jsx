import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import "../style/ModifyProfile.css";
import EditableField from "./EditableField";
import axios from "axios";

function ModifyProfile() {
  const { user } = useContext(AppContext);
  const [userAdatok, setUserAdatok] = useState({
    name: user?.name || "",
    vezetek_nev: user?.vezetek_nev || "",
    kereszt_nev: user?.kereszt_nev || "",
    email: user?.email || "",
    telefon: user?.telefon || "",
  });

  useEffect(() => {
    setUserAdatok({ ...user });
  }, [user]);

  const HandleChange = async (id, value) => {
    setUserAdatok((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    try {
      const response = await axios.patch(`/api/modify-user-data/${user.id}`, {
        [id]: value,
      });

      if (response.status === 200) {
        console.log("Felhasználói adatok sikeresen frissítve:", response.data);
      }
    } catch (error) {
      console.error("Hiba történt az adatfrissítés közben:", error);
    }
  };

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
          
          <div className="szemelyes-link">
            <h2>
              AZ ÉN SZEMÉLYES OLDALAM: http://localhost:5173/
              {user.egyeni_vegpont}
            </h2>
            <button
              className="copy-button"
              onClick={() =>
                navigator.clipboard.writeText(
                  `http://localhost:5173/${user.egyeni_vegpont}`
                )
              }
            >
              Másolás a vágólapra
            </button>
          </div>

          <EditableField
            name="name"
            id="name"
            label="Felhasználónév"
            value={userAdatok.name}
            onChange={HandleChange}
          />
          <EditableField
            name="email"
            id="email"
            label="Email cím"
            value={userAdatok.email}
            onChange={HandleChange}
          />

          <EditableField
            name="vezetek_nev"
            id="vezetek_nev"
            label="Vezeték név"
            value={userAdatok.vezetek_nev}
            onChange={HandleChange}
          />

          <EditableField
            name="kereszt_nev"
            id="kereszt_nev"
            label="Kereszt név"
            value={userAdatok.kereszt_nev}
            onChange={HandleChange}
          />

          <EditableField
            name="telefon"
            id="telefon"
            label="Telefonszám"
            value={userAdatok.telefon}
            onChange={HandleChange}
          />

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
              <button className="jelszo-valtoztatas-gomb">
                Jelszó módosítása
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default ModifyProfile;
