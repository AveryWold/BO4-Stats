import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

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
          {/* <Link to="/" > */}
            <img src={url} className="bo4-logo" alt="logo"/>
          {/* </Link> */}
          <p className="header">
            Check BO4 Stats
          </p>
          <div className="links">
            <ul>
              <li><Link exact to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;