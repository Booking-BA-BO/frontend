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

  const [passwordForm, setPasswordForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  useEffect(() => {
    if (user) {
      setUserAdatok({ ...user });
    }
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

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (passwordForm.new_password !== passwordForm.new_password_confirmation) {
      alert("Az új jelszavak nem egyeznek.");
      return;
    }

    try {
      const response = await axios.patch(`/api/change-password/${user.id}`, {
        current_password: passwordForm.current_password,
        new_password: passwordForm.new_password,
        new_password_confirmation: passwordForm.new_password_confirmation,
      });

      if (response.status === 200) {
        alert("Jelszó sikeresen megváltoztatva.");
        setPasswordForm({
          current_password: "",
          new_password: "",
          new_password_confirmation: "",
        });
      }
    } catch (error) {
      console.error("Hiba történt a jelszóváltoztatás során:", error);
      alert(
        error.response?.data?.message ||
          "Hiba történt a jelszóváltoztatás közben."
      );
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
            <h5>
              A személyes oldalam linkje: http://localhost:5173/
              {user.egyeni_vegpont}
            </h5>
            <button
              className="copy-button"
              onClick={() =>
                navigator.clipboard.writeText(
                  `http://localhost:5173/${user.egyeni_vegpont}`
                )
              }
            >
              <img
                src="/icons/masolas.svg"
                alt="másolás ikon"
                className="ikon"
                style={{
                  width: "35px",
                  height: "35px",
                  display: "inline-block",
                }}
              />
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

          <div className="jelszo-valtoztatas-div">
            <div className="jelszo-valtoztatas-es-utoljara-valtoztatott">
              <h6>Jelszó változtatás</h6>
              <p>Legutóbb változtatva: {formatDate(user.password_change)}</p>
            </div>
            <form onSubmit={handlePasswordSubmit}>
              <div className="jelszo-valtoztatas-form">
                <div>
                  <label htmlFor="current_password">Jelenlegi jelszó:</label>
                </div>
                <div>
                  <input
                    type="password"
                    name="current_password"
                    value={passwordForm.current_password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="new_password">Új jelszó:</label>
                </div>
                <div>
                  <input
                    type="password"
                    name="new_password"
                    value={passwordForm.new_password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="new_password_confirmation">
                    Új jelszó mégegyszer:
                  </label>
                </div>
                <div>
                  <input
                    type="password"
                    name="new_password_confirmation"
                    value={passwordForm.new_password_confirmation}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
              </div>
              <button className="jelszo-valtoztatas-gomb" type="submit">
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
