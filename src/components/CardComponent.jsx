import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Card.css";

const CardComponent = (props) => {
  const rovidLeiras =
    props.elem.leiras.split(" ").slice(0, 3).join(" ") +
    (props.elem.leiras.split(" ").length > 3 ? "..." : "");
  return (
    <div class="kartya">
      <div class="kartya-fejlec">{props.elem.hely}</div>
      <div class="kartya-torzs">
        <h5 class="kartya-cim">{props.elem.nev}</h5>
        <p class="kartya-leiras">{rovidLeiras}</p>
      </div>
      <div class="kartya-lablec">
        {props.elem.ar} Ft{" "}
        <a href={'/modifyevent/' + props.elem.esemeny_id}>
        <button class="kartya-gomb">↪</button>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;