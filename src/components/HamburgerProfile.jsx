import { useState } from "react";
import Hamburger from "hamburger-react";
import "../style/HamburgerProfile.css";
import Logout from "./Logout";

const HamburgerProfile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <nav className="menu">
          <ul>
            <li><a href="/profile">Profil</a></li>
            <li><a href="/contact">Kontakt</a></li>
            <li><a href="#">FAQs</a></li>
            <li><Logout /></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerProfile;
