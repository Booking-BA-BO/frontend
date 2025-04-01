import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Card.css";

const CardComponent = () => {
  const adat = useContext(AppContext);

  return (
      <div class="card">
        <div class="card-details">
          <h3 class="text-title">Cím</h3>
          <p class="text-body">Rövid leírás</p>
          <hr />
        <div className="arEsGomb">
            <h3 class="card-price">5700Ft</h3>
            <button class="card-button">&#8594;</button>
        </div>
        </div>
      </div>
  );
};

export default CardComponent;
