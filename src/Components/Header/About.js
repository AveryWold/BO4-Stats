import React, {Component} from 'react';
import Header from './Header';
import '../../App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <Header/> 
        <div className="Background"> 
          <div className="main">
            <div className="about">
              <h1>An app to check PSN black ops 4 stats</h1>
            </div>
          </div>
        </div>    
      </div>
    );
  }
}
export default About