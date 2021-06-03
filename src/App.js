import React from 'react';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import {ImageBased} from './Pages/ImageBased/ImageBased'
import LiveBased from './Pages/LiveBased/LiveBased'
import Help from './Pages/Help/Help'
import Home from "./Pages"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() { 
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/live-camera-based' component={LiveBased} />
        <Route path='/image-based' component={ImageBased} />
        <Route path='/help' component={Help} />
        </Switch>
    </Router>
  );
} 
  
export default App; 