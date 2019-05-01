import React, { Component } from 'react';
import Weather  from './Weather_data.js'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1 className="title">React - WeatherApp</h1>
        <Weather />

      </div>
    );
  }
}

export default App;
