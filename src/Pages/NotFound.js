import React from 'react'
import { Link } from 'react-router-dom'
import notfoundimg from './Images/404.jpg'
import "./Home/404.css"
import { Button } from "react-bootstrap";

export default function NotFound() {
    return (
            <div className="not-found-container" style={{ backgroundImage: `url(${notfoundimg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'
                
        }}>
            <div className="notbtn">
                <Link to="/"><Button id="btn404"variant="dark" size="lg">Back to Homepage</Button>{' '}</Link>
            </div>
            </div>
            

    )
}

