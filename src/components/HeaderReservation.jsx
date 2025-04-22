import React from 'react'
import "../style/Header.css";

function HeaderReservation() {
    return (
        <header className="header">
          <div className="header-background">
            <div className="header-left">
                <img className="logo-image" src="photos/logo.png" alt="logo" />
              <h1>
                  BookIT{" "}
              </h1>
            </div>
          </div>
        </header>
      );
}

export default HeaderReservation