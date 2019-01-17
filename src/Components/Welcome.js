import React, { Component } from 'react';
import '../App.css';
import UserNameForm from './UserNameForm';

class Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

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
