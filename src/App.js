import React, { Component } from 'react';
import LiveBased from './Pages/LiveBased/LiveBased'
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <LiveBased/>
      </div>
    );
  }
}

export default App;