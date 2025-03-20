import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Card.css'

const CardComponent = () => {
    return (
        <div className="card-container">
            <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Cím</Card.Title>
                    <Card.Text>
                        Esemény neve
                    </Card.Text>
                    <Card.Text>
                        Leírás
                    </Card.Text>
                    <Button variant="primary">Szerkesztés</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardComponent;