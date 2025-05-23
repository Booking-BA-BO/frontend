import React, { useContext, useState, useEffect } from "react";
import "../style/Profil.css";
import { AppContext } from "../Context/AppContext";

function ProfilNavigation() {
  const { user } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [profilePicture, setProfilePicture] = useState("profile_pictures/default.jpg");

  useEffect(() => {
    if (user?.profile_picture) {
      setProfilePicture(user.profile_picture);
      console.log("Profilkép URL:", user.profile_picture);
    }
  }, [user]);

  const imageUrl =
    profilePicture && profilePicture !== "default.jpg"
      ? `http://localhost:8000/storage/${profilePicture}`
      : "http://localhost:8000/storage/profile_pictures/default.jpg";

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="profil-navigacio">
        <ul>
          <li>
            <a href="/profile" onClick={() => handleLinkClick("profile")}>
              <img className="profil-kep" src={imageUrl} alt="Profilkép" />
            </a>
          </li>
          <li>
            <div>
              <a className="profil-gomb-nev" href="/profile">
                <h1>{user?.name}</h1>
              </a>
            </div>
          </li>
          <li className={activeLink === "modify" ? "active" : "passive"}>
            <a href="/profile/modify" onClick={() => handleLinkClick("modify")}>
              Profilom szerkesztése
            </a>
          </li>
          <li className={activeLink === "events" ? "active" : "passive"}>
            <a href="/profile/events" onClick={() => handleLinkClick("events")}>
              Minden eseményem
            </a>
          </li>
          <li className={activeLink === "calendar" ? "active" : "passive"}>
            <a
              href={`/profile/calendar/${user?.egyeni_vegpont}`}
              onClick={() => handleLinkClick("calendar")}
            >
              Naptáram
            </a>
          </li>
        </ul>
      </nav>

      <div className="profil-navigacio-dropdown-kulso">
        <h1>{user?.name}</h1>
        <button
          className="dropdown-toggle"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          Menü
        </button>
        {isDropdownOpen && (
          <nav className="profil-navigacio-dropdown">
            <ul>
              <li className={activeLink === "modify" ? "active" : "passive"}>
                <a href="/profile/modify" onClick={() => handleLinkClick("modify")}>
                  Profilom szerkesztése
                </a>
              </li>
              <li className={activeLink === "events" ? "active" : "passive"}>
                <a href="/profile/events" onClick={() => handleLinkClick("events")}>
                  Minden eseményem
                </a>
              </li>
              <li className={activeLink === "calendar" ? "active" : "passive"}>
                <a
                  href={`/profile/calendar/${user?.egyeni_vegpont}`}
                  onClick={() => handleLinkClick("calendar")}
                >
                  Naptáram
                </a>
              </li>
              <li className={activeLink === "settings" ? "active" : "passive"}>
                <a href="/settings" onClick={() => handleLinkClick("settings")}>
                  Beállítások
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default ProfilNavigation;
