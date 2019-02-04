import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
  const url='https://static.gamevicio.com/imagens/games/92/9184-call-of-duty-black-ops-iiii.jpg';
    return (
      <div className="App">
        <header className="App-header">
            <img src={url} className="bo4-logo" alt="logo"/>
          <p className="header">
            Get BO4 Stats
          </p>
          <div className="links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/compare">Compare</Link></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;