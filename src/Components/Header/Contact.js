import React, {Component} from 'react';
import Header from './Header';

class Contact extends Component {
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
              <div className="contact">
                <h1>CONTACT ME</h1>
                <p>
                  
                </p>
              </div>            
            </div>
          </div>    
        </div>
      );
    }
  }
export default Contact