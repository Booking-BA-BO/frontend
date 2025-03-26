import React from "react";
import "../style/WelcomeText.css";

const WelcomeText = () => {
  return (
    <div className="introductionText">
        <h1>BookIT: <br></br> A jövő szervezése!</h1>
        <h6>A BookIT egyszerűsíti a dolgokat, hogy te arra koncentrálhass, ami igazán fontos. Regisztrálj most, és használd ki a legújabb funkcióinkat, amelyek segítenek minden pillanatot a legjobban kihasználni.</h6>
        <div className="buttonsIntroduction">
            <a href="/register">Regisztráció</a>
            <a href="#">További információ</a>
        </div>
        <div>
            <h3>Funkciók:</h3>
            <p>ide jönnek a funkciók, oldalra egymás mellé négy kép, visz. kicsik</p>
        </div>
    </div>
  );
};

export default WelcomeText;
