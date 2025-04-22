import React from "react";
import "../style/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NoAuthHamburger from "./NoAuthHaburger";

const HeaderNoAuth = () => {
  return (
    <header className="header">
      <div className="header-background">
        <div className="header-left">
          <a href="/">
            <img className="logo-image" src="photos/logo.png" alt="logo" />
          </a>
          <h1>
            <a className="logo" href="/">
              BookIT{" "}
            </a>
          </h1>
        </div>

        <div className="headerMid">
          <a href="/documentation">
            <h5>Felfedezés</h5>
          </a>
          <a href="/contact">
            <h5>Kontakt</h5>
          </a>
          <a href="/faq">
            <h5>FAQs</h5>
          </a>
        </div>

        <div className="headerRight">
          <a href="/login" className="login">
            <h5>Bejelentkezés</h5>
          </a>
        </div>

        <div className="no-auth-hamburger-mobile">
          <NoAuthHamburger />
        </div>
      </div>
    </header>
  );
};

export default HeaderNoAuth;
