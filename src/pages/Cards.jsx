import CardComponent from "../components/CardComponent.jsx";
import "../style/Cards.css";
import "../style/Card.css";

export default function Cards() {
  return (
    <>
      <div className="cimEsNav">
        <h1>Munkáim</h1>
        <a href="#"><h3>Mindent mutass</h3></a>
      </div>
      <div className="kartyak">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <div class="card">
            <button class="plus">+</button>
        </div>
        </div>
    </>
  );
}
