import React, { Component } from 'react';
import './App.css';
import MenuBar from '../MenuBar/MenuBar';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Home />
      </div>
    );
  }
}

export default App;
