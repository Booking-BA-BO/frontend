import React from "react";
import "../style/Welcome.css";

const WelcomeText = () => {
  return (
    <div className="introductionText">
        <h1>BookIT: <br /> A jövő szervezése!</h1>
        <h6>A BookIT egyszerűsíti a dolgokat, hogy te arra koncentrálhass, ami igazán fontos. Regisztrálj most, és használd ki a legújabb funkcióinkat, amelyek segítenek minden pillanatot a legjobban kihasználni.</h6>
        <div className="buttonsIntroduction">
            <a href="/register">Regisztráció</a>
            <a href="#">További információ</a>
        </div>
        <div>
            <h3>Funkciók:</h3>
            <div className="kepek-div">
              <div className="kepcsoport">
              <img src="../../public/photos/effective.jpg" alt="effective" />
              <img src="../../public/photos/exportable.jpg" alt="exportable" />
              </div>
              <div className="kepcsoport">
              <img src="../../public/photos/managable.jpg" alt="managable" />
              <img src="../../public/photos/integratable.jpg" alt="integratable" />
              </div>
            </div>
        </div>
    </div>
  );
};

export default WelcomeText;
