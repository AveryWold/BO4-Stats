import React, { Component } from 'react';

export default class UserNameInput extends Component{
  render(){
    return (
      <p>
        <input type="text" username={this.props.username} onChange={this.props.onChange} placeholder="Enter your PSN gamer tag"/>
      </p>
    )
  }
}