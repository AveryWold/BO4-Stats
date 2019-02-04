import React, {Component} from 'react';
import Header from '../Components/Header/Header';
import '../App.css';
import { Link } from 'react-router-dom';

class CompareOops extends Component {
  render() {
    return (
      <div className="App">
        <Header/> 
        <div className="Background"> 
          <div className="main">
            <div className="about">
              <h1>Oops!  One or both of the gamer tags you entered is invalid, or has no stats!</h1>
              <Link to="/compare"><button>Try Again</button></Link>
            </div>
          </div>
        </div>    
      </div>
    );
  }
}
export default CompareOops