import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const EditorInsigts = () => {
  return (
    <>
        <h3 className="mt-5 mb-3">Editors Insight</h3>
      <Row xs={1} md={2} lg={3} className="g-4 ">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Date</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Date</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Date</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EditorInsigts;
