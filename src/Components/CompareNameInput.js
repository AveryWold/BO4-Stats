import React, { Component } from 'react';

export default class CompareNameInput extends Component{
  render(){
    return (
      <p>
        <input type="text" name={this.props.name} value={this.props.value} onChange={this.props.onChange} placeholder="Enter a PSN gamer tag"/>
      </p>
    )
  }
}