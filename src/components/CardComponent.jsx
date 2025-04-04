import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Card.css";

const CardComponent = (props) => {
  const rovidLeiras = props.elem.leiras.split(" ").slice(0, 3).join(" ") + (props.elem.leiras.split(" ").length > 3 ? "..." : "");
  return (
      <div className="card">
        <div className="card-details">
          <h3 className="text-title">{props.elem.nev}</h3>
          <p className="text-body">{rovidLeiras}</p>
          <hr />
        <div className="arEsGomb">
            <h3 className="card-price">{props.elem.ar} Ft</h3>
            <button className="card-button">&#8594;</button>
        </div>
        </div>
      </div>
  );
};

export default CardComponent;
