import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";


export default function ContactComponent() {
  return (
    <div id="contact">
      <h4>CONTACT</h4>
      <Container>
        <Row xs={1} md={3} className="g-3 m-4">
          <Col>
            {/* <Card>
              <Card.Body className="text-center"></Card.Body>
            </Card> */}
          </Col>

          <Col>
            <Card>
              <Card.Body className="text-center">
                
                <p>
                  <AiOutlineMail /> Email: <br /> <span>sted96@gmail.com</span>
                </p>
                <p>
                  <BsFillTelephoneFill /> Telephone: <br />{" "}
                  <span>+39 3889860198</span>
                </p>{" "}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            {/* <Card>
              <Card.Body className="text-center"></Card.Body>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
