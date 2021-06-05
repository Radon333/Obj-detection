import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./Help.css";

function Help() {
  return (
    <div>
      <div className="hero-area">
      <h1 id="faq">Some FAQ's</h1>
        <div className="hero-text">
          <br/>
        </div>
          <div className="accordion">
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle className="qs" as={Button} variant="link" eventKey="0">
                    Objects in images are not being detected?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="inner-content">
                    <p>
                      Make sure the uploaded image isn't blurred and the object to be detected is focused.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle className="qs" as={Button} variant="link" eventKey="1">
                    Live Camera Based detection is not starting?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="inner-content">
                    <p>
                      You need to allow the website to use the camera when permission pop up box appears.It might take few minutes to start depending upon your system.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle className="qs" as={Button} variant="link" eventKey="2">
                    Found a bug? or want a new feature to be added?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="inner-content">
                    <p>
                      You can raise an issue <a id="issuelink"href="https://github.com/Radon333/Obj-detection/issues">here</a> with proper description and labels
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