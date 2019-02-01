import React, {Component} from 'react';
import Header from '../Components/Header/Header';
import CompareNameForm from './CompareNameForm';
import '../App.css';

class Compare extends Component {
    render() {
        return (
          <div className="App">
            <Header/> 
            <div className="Background">  
              <div className="compare">
                <CompareNameForm username={this.props.username} />
              </div>
            </div>    
          </div>
        );
      }
    }

export default Compare;