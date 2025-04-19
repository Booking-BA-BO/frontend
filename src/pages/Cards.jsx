import CardComponent from "../components/CardComponent.jsx";
import HelloHeader from "../components/HelloHeader.jsx";
import "../style/Cards.css";
import "../style/Card.css";
import "../style/Popup.css";
import useApiContext from "../Context/ApiContext.jsx";
import PlusCardComponent from "../components/PlusCardComponent.jsx";
import { useState } from "react";

export default function Cards() {
  const { topEsemenyek, esemenyek } = useApiContext();
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = (e) => {
    e.preventDefault();
    setShowAll(!showAll);
  };

  return (
    <>
      <div>
        <HelloHeader />
      </div>
      <div className="cards-content">
        <div className="cimEsNav">
          <h1>Munkáim</h1>
          <a className="minden-mutat-gomb" href="#" onClick={handleShowAll}>
            <h3>{showAll ? "Kevesebbet mutass" : "Mindent mutass"}</h3>
          </a>
        </div>
        <div className="kartyak">
          {topEsemenyek.map((elem, index) => {
            return <CardComponent elem={elem} key={index} index={index} />;
          })}
          <PlusCardComponent />
        </div>
        
        {showAll && (
          <div className="osszes-esemeny">
            <h2>Összes esemény</h2>
            <div className="osszes-kartyak">
              {esemenyek.map((elem, index) => {
                return <CardComponent elem={elem} key={index} index={index} />;
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}