import { AppContext } from "../Context/AppContext";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Card.css";

const CardComponent = (props) => {

  const rovidLeiras =
    props.elem.leiras.split(" ").slice(0, 3).join(" ") +
    (props.elem.leiras.split(" ").length > 3 ? "..." : "");


  return (
    <div className="kartya">
      <div className="kartya-fejlec">
        {props.elem.hely}{" "}
      </div>
      <div className="kartya-torzs">
        <h5 className="kartya-cim">{props.elem.nev}</h5>
        <p className="kartya-leiras">{rovidLeiras}</p>
      </div>
      <div className="kartya-lablec">
        {props.elem.ar} Ft{" "}
        <a href={"/modifyevent/" + props.elem.esemeny_id}>
          <button className="kartya-gomb">
            <img src="/icons/nyil.svg" alt="nyíl ikon" className="ikon" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
