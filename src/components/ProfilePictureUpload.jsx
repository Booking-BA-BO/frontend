import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { myAxios } from "../api/axios";
import "../style/ProfilePictureUpload.css";

function ProfilkepFeltolto() {
  const { user, setUser } = useContext(AppContext);
  const [kep, setKep] = useState(null);
  const [elozetes, setElozetes] = useState("");

  const kepValtozasKezelo = (e) => {
    const file = e.target.files[0];
    setKep(file);
    setElozetes(URL.createObjectURL(file));
  };

  const feltoltesKezelo = async () => {
    if (!kep) {
      alert("Nem lett kiválasztva fájl.");
      return;
    }

    const formData = new FormData();
    formData.append("image", kep);

    try {
      await myAxios.get("/sanctum/csrf-cookie");

      const response = await myAxios.post(
        "/api/upload-profile-picture",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.path) {
        setUser((prev) => ({
          ...prev,
          profile_picture: response.data.path,
        }));

        alert("Profilkép sikeresen feltöltve.");
        setKep(null);
        setElozetes("");
      }
    } catch (error) {
      console.error("Hiba:", error);
      alert("Hiba történt a profilkép feltöltésekor.");
    }
  };

  const torlesKezelo = async () => {
    try {
      await myAxios.delete("/api/delete-profile-picture");

      setUser((prev) => ({
        ...prev,
        profile_picture: "default.jpg",
      }));

      alert("Profilkép törölve.");
      setKep(null);
      setElozetes("");
    } catch (error) {
      console.error("Hiba:", error);
      alert("Hiba történt a profilkép törlésénél.");
    }
  };

  const kepUrl =
    user?.profile_picture && user.profile_picture !== "default.jpg"
      ? `http://localhost:8000/storage/${user.profile_picture}`
      : "http://localhost:8000/storage/profile_pictures/default.jpg";

  return (
    <div className="profilkep_feltolto_kulso">
      <img
        src={elozetes || kepUrl}
        alt="Profilkép"
        className="profilkep_kep"
      />
      <input
        type="file"
        onChange={kepValtozasKezelo}
        accept="image/*"
        className="profilkep_input"
      />
      <button onClick={feltoltesKezelo} className="profilkep_gomb">
        Feltöltés
      </button>
      {user?.profile_picture && user.profile_picture !== "default.jpg" && (
        <button onClick={torlesKezelo} className="profilkep_gomb torles_gomb">
          Törlés
        </button>
      )}
    </div>
  );
}

export default ProfilkepFeltolto;
