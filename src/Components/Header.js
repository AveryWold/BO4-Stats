import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  render() {
  const url='https://static.gamevicio.com/imagens/games/92/9184-call-of-duty-black-ops-iiii.jpg';
    return (
      <div className="App">
        <header className="App-header">
          <img src={url} className="bo4-logo" alt="logo"/>
          <p className="header">
            Check BO4 Stats
          </p>
        </header>
      </div>
    );
  }
}

export default Header;