import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import CardComponent from "../components/CardComponent";

export default function Cards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <CardComponent />
        </div>
        <div className="col">
          <CardComponent />
        </div>
        <div className="col">
          <CardComponent />
        </div>
        <div className="col">
          <CardComponent />
        </div>
        <div className="col">
          <CardComponent />
        </div>

        <div className="col">
          <div className="card-container">
            <Card>
              <Card.Body>
                <Button variant="primary">Hozzáad</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
