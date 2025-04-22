import { useState } from "react";
import Hamburger from "hamburger-react";
import "../style/HamburgerProfile.css";

const NoAuthHamburger = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <nav className="menu">
          <ul>
            <li>
              <a href="/documentation">Felfedezés</a>
            </li>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
            <li>
              <a href="/login">Bejelentkezés</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NoAuthHamburger;
