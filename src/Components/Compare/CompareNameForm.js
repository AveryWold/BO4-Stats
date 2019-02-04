import React, {Component} from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import {getCompare1, getCompare2} from '../../Actions/GetUser';
import { updateUserName1, updateUserName2 } from '../../Actions/CompareInfo';
import CompareNameInput from './CompareNameInput'
import FormErrors from '../FormErrors';
import { Redirect } from 'react-router-dom';

class CompareNameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toGameStats: false,
            formErrors: {
              validGamerTag: '',
            },
            isUserNameValid: false,
            showFormErrors: false,
            redirectToStats: false
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.checkGamerTagInput = this.checkGamerTagInput.bind(this);
    }

    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(updateUserName1(""));
        dispatch(updateUserName2(""));
    }

    handleChange1 = (event) => {
        this.setState({showFormErrors:false});
        const { dispatch } = this.props;
        dispatch(updateUserName1(event.target.value));
    }

    handleChange2 = (event) => {
        this.setState({showFormErrors:false});
        const { dispatch } = this.props;
        dispatch(updateUserName2(event.target.value));
    }

    checkGamerTagInput(e) {
        e.preventDefault();
        console.log(this.props.username1, this.props.username2);
        let newFormErrors = this.state.formErrors;
        let validUsername = this.state.isUserNameValid;
        const { dispatch } = this.props;
        dispatch(getCompare1(this.props.username1));
        dispatch(getCompare2(this.props.username2));

        if (this.props.username1 === "" || this.props.username2 === "") {
            newFormErrors.validGamerTag = 'Please enter 2 valid gamer tags';
            this.setState({formErrors: newFormErrors, showFormErrors: true, isUserNameValid: validUsername});
        }
        else {
            this.setState({showFormErrors: false, toGameStats: true, isUserNameValid: true, redirectToStats: true });
        }
    }
  
    render() {
      const {username1, username2} = this.props;
      const {toGameStats} = this.props;

      if (this.state.redirectToStats || toGameStats) {
          return (
              <Redirect to={{
                  pathname: `/comparestats/${username1}/${username2}`,
                  state: {
                      username1:this.props.username1,
                      username2:this.props.username2
                  }
              }}/>
          )
      }

      if(!toGameStats){
        return (
            <div className="compare">
                <h1>Compare stats</h1>
                <form>
                    <p>
                        <CompareNameInput value={username1} name="username1" onChange={this.handleChange1} />
                        <CompareNameInput value={username2} name="username2" onChange={this.handleChange2} />
                        <button onClick={e => this.checkGamerTagInput(e)}>Compare</button>
                    </p>
                    {(!this.state.isUserNameValid) && this.state.showFormErrors && <FormErrors errors={this.state.formErrors} />}
                </form>
            </div>
        );
      }
    }
}

  const mapStateToProps = (state) => {
    return {
      username1: state.CompareInfo.username1,
      username2: state.CompareInfo.username2,
      success1: state.GetUser.success1,
      success2: state.GetUser.success2
    }
  }
export default connect(mapStateToProps)(CompareNameForm)