import React, { useRef,useEffect } from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRect } from "./utilities";
import './LiveBased.css'

function LiveBased() {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    useEffect(() => { 
        const runCoco = async () => {
            const net = await cocossd.load();
            console.log("Handpose model loaded.");
            
            setInterval(() => {
                detect(net);
            }, 10);
            };
            runCoco();
    },[]);


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

    
    return (
        <div>
        <header className="header">
            <h1>Live Object detection</h1>
            <br/>
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
        </div>
    );
}

export default LiveBased
