import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./Help.css";

function Help() {
  return (
    <div>
      <div className="hero-area">
        <div className="hero-text">
          <h1>In case if u need any help</h1>
        </div>
          <div className="accordion">
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Images are not Recognizing
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="inner-content">
                    <p>
                      Images uploaded should not be blur and it should have a
                      decent amount of quality
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Web Based Image is Not Recognizing
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="inner-content">
                    <p>
                      The web camera quality should be decent in order to have a
                      recognize the image
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Web Pages are not working
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="inner-content">
                    <p>
                      When the Sites are not working properly the website must
                      be under construction and soon it will be working properly`
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        
      </div>
    </div>
  );
}

export default Help;
