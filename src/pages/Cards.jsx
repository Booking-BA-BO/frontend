import CardComponent from "../components/CardComponent.jsx";
import HelloHeader from "../components/HelloHeader.jsx";
import "../style/Cards.css";
import "../style/Card.css";
import "../style/Popup.css";
import { useContext, useState } from "react";
import NewForm from "../components/NewForm.jsx";
import useApiContext, { ApiContext } from "../Context/ApiContext.jsx";
import { AppContext } from "../Context/AppContext.jsx";

export default function Cards() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { esemenyek } = useApiContext();
  const { user } = useContext(AppContext);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <>
      <div>
        <HelloHeader />
      </div>
      <div className="content">
        <div className="cimEsNav">
          <h1>Munkáim</h1>
          <a href="#">
            <h3>Mindent mutass</h3>
          </a>
        </div>
        <div className="kartyak">
            {
              esemenyek.map((elem, index) => {
                return <CardComponent elem={elem} key={index} index={index}/>
              })                
            }
          <div className="card">
            <div>
              <button className="plus" onClick={showPopup}>
                +
              </button>
              {isPopupVisible && (
                <>
                  <div className="overlay active" onClick={closePopup}></div>
                  <div className="popup">
                    <button className="close-new-form" onClick={closePopup}>
                      x
                    </button>
                    <div>
                      <NewForm />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
