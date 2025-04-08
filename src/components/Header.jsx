import React from "react";
import "../style/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HamburgerProfile from "./HamburgerProfile";

const Header = () => {
  return (
    <header className="header">
      <div className="header-background">
        <img src="../../public/photos/logo.png" alt="logo" />
        <div className="headerLeft">
          <h1>
            <a className="logo" href="/">
              BookIT{" "}
            </a>
          </h1>
        </div>
        <div className="header-hamburger">
          <HamburgerProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
