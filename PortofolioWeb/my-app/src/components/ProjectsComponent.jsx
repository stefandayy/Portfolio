import React from "react";
import { Row, Col, Button, Container, Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
} from "react-icons/si";

export default function ProjectsComponent() {
  return (
    <Container id="projects">
      <h4>PROJECTS</h4>
      <Row xs={1} md={1} className="g-4 m-3">
        <Col>
          <Card className="px-2">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Calculator</Card.Title>
              <Card.Text>
                <p>A simple calculator written in JS.</p>
                <Badge bg="secondary">
                  HTML
                  <SiHtml5 />
                </Badge>{" "}
                <Badge bg="secondary">
                  CSS <SiCss3 />
                </Badge>{" "}
                <Badge bg="secondary">
                  Javascript <SiJavascript />
                </Badge>
              </Card.Text>
              <a
                href="https://project-calculator-8s9tmccu5-stefandayy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="me-3 mb-2" variant="info">
                  Demo
                </Button>
              </a>
              <a
                href="https://github.com/stefandayy/projectCalculator"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="mb-2" variant="info">
                  <b></b> Repository
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="px-2">
            {/* <Card.Img variant="top" src={wApp} alt="wApp" style={{width:'100p',height:'180',margin:"10px"}} /> */}
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                <p>
                  This is a responsive Weather app made in React.js and Boostrap
                  and i choose the API from Open Weather.
                </p>
                <Badge bg="secondary">
                  React.js <SiReact />
                </Badge>{" "}
                <Badge bg="secondary">
                  Bootstrap <SiBootstrap />
                </Badge>
              </Card.Text>
              <a
                href="https://weather-app-bootstrap-1-stefandayy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="me-3 mb-2" variant="info">
                  Demo
                </Button>
              </a>
              <a
                href="https://github.com/stefandayy/Weather-app-bootstrap"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="mb-2" variant="info">
                  Repository
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="px-2">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>To Do List</Card.Title>
              <Card.Text>
                <p>
                  This a responsive To Do List built in React.js with Redux
                  Toolkit and Boostrap.
                </p>
                <Badge bg="secondary">
                  React.js <SiReact />
                </Badge>{" "}
                <Badge bg="secondary" className="me-1">
                  Redux <SiRedux />
                </Badge>
                <Badge bg="secondary">
                  Bootstrap <SiBootstrap />
                </Badge>
              </Card.Text>
              <a
                href="https://to-do-list-react-redux-stefandayy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="me-3 mb-2" variant="info">
                  Demo
                </Button>
              </a>
              <a
                href="https://github.com/stefandayy/ToDoList-react-redux"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="mb-2" variant="info">
                  Repository
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
