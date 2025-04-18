import CardComponent from "../components/CardComponent.jsx";
import HelloHeader from "../components/HelloHeader.jsx";
import "../style/Cards.css";
import "../style/Card.css";
import "../style/Popup.css";
import useApiContext, { ApiContext } from "../Context/ApiContext.jsx";
import PlusCardComponent from "../components/PlusCardComponent.jsx";

export default function Cards() {
  const { topEsemenyek } = useApiContext();

  return (
    <>
      <div>
        <HelloHeader />
      </div>
      <div className="cards-content">
        <div className="cimEsNav">
          <h1>Munkáim</h1>
          <a href="#">
            <h3>Mindent mutass</h3>
          </a>
        </div>
        <div className="kartyak">
          {topEsemenyek.map((elem, index) => {
            return <CardComponent elem={elem} key={index} index={index} />;
          })}
          <PlusCardComponent />
        </div>
      </div>
    </>
  );
}