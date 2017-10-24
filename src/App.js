import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Homepage from './components/Homepage.js';
import Panicbuying from './components/Panicbuying.js';
import Classification from './components/Classification.js';
import Mine from './components/Mine.js';
import Hotspots from './components/Hotspots.js';

class App extends Component {
  render() {
    return (
      <div>
         <Hotspots />
      </div>
    )
  }
}

export default App;
