import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/HelloHeader.css";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const HelloHeader = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="hello-header-container">
      <h1>
        A következő nagy lépés <br />
        most van, {user.name}! Kezd el tervezni!
      </h1>
      <h4>
        Itt az ideje folytatni! Tervezz új eseményeket, vagy frissítsd a
        régieket, hogy minden tökéletes legyen.
      </h4>
      <form action="">
        <input
          type="text"
          className="search-input"
          placeholder="Miben segíthetünk..."
        />
        <button className="search-button">Keresés</button>
      </form>
    </div>
  );
};
export default HelloHeader;
