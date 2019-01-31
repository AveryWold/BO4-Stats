import React, {Component} from 'react';
import Header from '../Components/Header/Header';
import '../App.css';
import { Link } from 'react-router-dom';

class Oops extends Component {
    render() {
      return (
        <div className="App">
          <Header/> 
          <div className="Background"> 
            <div className="main">
              <div className="about">
                <h1>Oops, the gamertag you entered is not valid or has no stats!</h1>
                <Link to="/"><button>Try Again</button></Link>
              </div>
            </div>
          </div>    
        </div>
      );
    }
  }
export default Oops