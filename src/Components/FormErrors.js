import React, { Component } from 'react';
import '../Styles/FormErrors.css';

export default class FormErrors extends Component{
    render() {
        return(
            <div className="form-errors">
                 {Object.keys(this.props.errors).map(
                    (fieldName, i) => {
                        if(this.props.errors[fieldName].length > 0){
                            return <p>{this.props.errors[fieldName]}</p>
                        }
                        else{
                            return "";
                        }
                    }
                )} 
                <p></p>
            </div>
        )
    }
}