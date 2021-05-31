import React, { useRef,useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRect } from "./utilities";
import './LiveBased.css'
import Button from 'react-bootstrap/Button';

function LiveBased() {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    
    setInterval(() => {
        detect(net);
    }, 10);
    };

    const detect = async (net) => {
    
    if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
    ) 
    {
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        
        const obj = await net.detect(video);
        
        const ctx = canvasRef.current.getContext("2d");
        drawRect(obj, ctx); 
    }
    };

    useEffect(()=>{runCoco()},[]);
    return (
        <div>
        <header className="header">
            <h1>Live Object detection</h1>
            
            <p id="notice">Place the object to be detected in front of the camera</p>
        </header>
        <Webcam
            ref={webcamRef}
            muted={true} 
            style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
        }}
        />

        <canvas
            ref={canvasRef}
            style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
            }}
        />
        <div className="btn-container">
        <Button id="btn-back"variant="warning">Back</Button>{' '}
        <Button id="btn-help"variant="info">Help</Button>{' '}
        </div>
        </div>
    );
}

export default LiveBased