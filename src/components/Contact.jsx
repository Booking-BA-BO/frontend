import React from "react";
import "../style/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <main>
        <div className="oldal">
          <div className="contact-us-location-container">
            <div className="elerhetosegek">
              <h2>Keress fel minket!</h2>
              <div className="hely">
                <h1 className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </h1>
                <p>1138. Budapest Gyöngyösi sétány 10. Feng Lai</p>
              </div>
              <div className="emailcim">
                <h1 className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </h1>
                <p>borsikaaa1@gmail.com</p>
              </div>
              <div className="telefonszam">
                <h1 className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </h1>
                <p>+36304029447</p>
              </div>
            </div>
          </div>
          <div className="contact-us-form-container">
            <h1 className="lepj-kapcsolatba">Lépj velünk kapcsolatba!</h1>
            <form action="">
              <div className="input-mezo">
                <input
                  type="text"
                  id="nev"
                  name="nev"
                  className="form-control"
                  value=""
                  placeholder="Név..."
                />
              </div>
              <div className="input-mezo">
                <input
                  type="email"
                  id="email"
                  name="nev"
                  className="form-control"
                  value=""
                  placeholder="Email cím..."
                />
              </div>
              <div className="input-mezo">
                <textarea
                  id="leiras"
                  name="leiras"
                  className="form-control text-area"
                  value=""
                  placeholder="Miben segíthetünk? Írj egy üzenetet..."
                />
                <div className="kuldes">
                  <button className="gomb">Küldés</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
export default Contact;
