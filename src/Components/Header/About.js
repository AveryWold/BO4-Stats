import React, {Component} from 'react';
import Header from './Header';

class About extends Component {
    constructor(props){
      super(props)
      this.state = {};
    }
  
    render() {
      return (
        <div className="App">
          <Header/> 
          <div className="Background"> 
            <div className="main">
              <div className="about">
                <h1>ABOUT</h1>
                <p>
                  This is an app to check PSN black ops 4 stats
                </p>
              </div>
            </div>
          </div>    
        </div>
      );
    }
  }
export default About