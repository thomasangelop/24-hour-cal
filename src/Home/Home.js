import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>24 Hour Cal</h1>
          <p>Website and React Web Application Coming Soon!</p>
          <img width={300} height={400} mode='fit' alt="big-cal" src={require("../Images/redBackgroundCal.png")} />
        </header>
      </div>
    );
  }
}

export default Home;
