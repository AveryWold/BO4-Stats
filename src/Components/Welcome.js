import React, { Component } from 'react';
import '../App.css';
import UserNameForm from './UserNameForm';

class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <div className="Background">  
          <div className="main">
            <UserNameForm username={this.props.username} />
          </div>
        </div>    
      </div>
    );
  }
}

export default Welcome;
