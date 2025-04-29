import Accordion from "react-bootstrap/Accordion";
import "../style/faq.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const FaqAccordionComponent = () => {
  return (
    <>
      <div className="faqPage">
        <h2>Gyakran ismételt kérdések</h2>
        <div className="faq-content">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Hogyan tudom integrálni a foglalási oldalamat?</Accordion.Header>
              <Accordion.Body>
                Egyszerű, a porfil oldaladon látható linken keresztül ezentúl bárhol használhatod!
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Hogyan tudom kezelni a foglalásimat?</Accordion.Header>
              <Accordion.Body>
                A foglalások kezeléséhez keresd fel az adott esemény szerkesztési oldalán a foglalások szerkesztése menüpontot.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Kompatibilis google kalendárral?</Accordion.Header>
              <Accordion.Body>
                Az eseményeket automatikusan google calendárba importálhatod, amint lefoglaltad az időpontot.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Tudom változtatni a foglalás után küldött emailek tartalmát?</Accordion.Header>
              <Accordion.Body>
                Természetesen! Menj a törzsadatok változtatása opcióra az adott eseményen belül, és fogalmazd meg saját üzenetedet, vagy tölts fel word templatet!
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Le tudok mondani eseményeket, ha mér foglaltak rá?</Accordion.Header>
              <Accordion.Body>
                Sajnos erre jelenleg alkalmazásunkban még nincs opció, de igyekszünk a jövőben minél hamarabb bővíteni a weboldal funkcionalitási listáját.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="contactUs">
          <h1>Nem találtad meg amit kerestés?</h1>
          <p>
            A csapatunk csak egy email távolságra van tőled és készen áll
            megválaszolni minden kérdésed!
          </p>
          <div className="memberPics d-flex justify-content-center align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12} md={4} className="text-center">
                  <a href="/contact">
                    <Image
                      className="faq-profile-pic"
                      src="../../public/photos/both_orsolya.jpg"
                      roundedCircle
                    />
                  </a>
                  <h4>Both Orsolya</h4>
                  <p>Developer</p>
                </Col>
                <Col xs={12} md={4} className="text-center">
                  <a href="/contact">
                    <Image
                      className="faq-profile-pic"
                      src="../../public/photos/beldy_adam.jpg"
                      roundedCircle
                    />
                  </a>
                  <h4>Béldy Ádám</h4>
                  <p>Developer</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqAccordionComponent;
