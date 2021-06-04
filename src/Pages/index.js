import React from 'react'
import "./Home/Home.css"
import { Button , Container } from "react-bootstrap";
import mainimg from './Images/object-detection-illustration.png'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="Homes">
                  <Container fluid="md">
                        <div className="hero-area">
                        <h1 id="title">Welcome!</h1>
                        <div className="img-container">
                          <img className="land-img" src={mainimg} alt="object detection"/>
                        </div>
                        <br/>
                        <div className="about">
                        <h4 className="content">The application will help you identify objects you wish to detect</h4>
                        <h4 className="content">The user can opt to detect an object in an image or live using a camera.</h4>
                        </div>
                        <br/>
                        <div className="btn-container">
                        <Link to="/image-based">
                            <Button id="btn1"variant="warning" size="lg">Image Based</Button>{' '}
                            </Link>
                            <Link to="/live-camera-based">
                            <Button id="btn2"variant="danger" size="lg">Live Based</Button>{' '}
                            </Link>
                        </div>
                        </div>
                  </Container>
                  
    </div>
  )
}

export default Home
