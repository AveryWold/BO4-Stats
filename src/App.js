import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Welcome from './Components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <Welcome/>
      </div>
    );
  }
}

export default App;
