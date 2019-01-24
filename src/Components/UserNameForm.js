import React, { Component } from 'react';
import FormErrors from './FormErrors';
import '../App.css';
import UserNameInput from './UserNameInput'
import { connect } from 'react-redux';
import { updateUserName } from '../Actions/UserInfo';
import { Redirect } from 'react-router-dom';

class UserNameForm extends Component {
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

        this.handleChange = this.handleChange.bind(this);
        this.checkGamerTagInput = this.checkGamerTagInput.bind(this);
    }

    handleChange = (event) => {
        const { dispatch } = this.props;
        dispatch(updateUserName(event.target.value));
    }

    checkGamerTagInput(e) {
        e.preventDefault();
        let newFormErrors = this.state.formErrors;
        let validUsername = this.state.isUserNameValid;

        if (this.props.username === "") {
            newFormErrors.validGamerTag = 'Please enter a valid gamer tag'
            this.setState({formErrors: newFormErrors, showFormErrors: true, isUserNameValid: validUsername});
        }
        else {
            this.setState({showFormErrors: false, toGameStats: true, isUserNameValid: true, redirectToStats: true });
        }
    }

    render() {
        const {toGameStats} = this.props;
        const {username} = this.props;
        if (this.state.redirectToStats) {
            return (
                <Redirect to={{
                    pathname: `/stats/${this.props.username}`,
                    state: {
                        username:this.props.username
                    }
                }}/>
            )
        }

        if (!toGameStats){
            return(
                <form>
                    <p>
                        <UserNameInput username={username} onChange={this.handleChange} />
                        <button onClick={this.checkGamerTagInput}>Get Stats</button>
                    </p>
                    {(!this.state.isUserNameValid) && this.state.showFormErrors && <FormErrors errors={this.state.formErrors} />}
                </form>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
      username: state.UserInfo.username,
    }
}

export default connect(mapStateToProps)(UserNameForm)
