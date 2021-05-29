import React, { Component } from 'react';
import "./App.css";
import styled from "styled-components";
import {ImageBased} from './Pages/ImageBased/ImageBased'
import { Button } from 'react-bootstrap';

import LiveBased from './Pages/LiveBased/LiveBased'


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1c2127;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

function App(){
  return (
    <AppContainer>
      <ImageBased />
    </AppContainer>
  )
}

export default App
