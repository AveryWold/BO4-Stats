import React, { Component } from 'react';
import FormErrors from './FormErrors';
import '../App.css';
import UserNameInput from './UserNameInput'
import Login from './Login';
import { connect } from 'react-redux';
import { updateUserName } from '../Actions/UserInfo';

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
        if (this.props.username === "") {
            newFormErrors.validGamerTag = 'Please enter a valid gamer tag'
            this.setState({formErrors: newFormErrors, showFormErrors: true})
        }
        else {
            this.setState({showFormErrors: false, toGameStats: true, isValidGamerTag: true  });
        }
    }

    render() {
        const {toGameStats} = this.state;
        const {username} = this.props
        return (
            <div className="form">
                {!toGameStats ? (
                <form onSubmit={this.checkGamerTagInput.bind(this)}>
                    <UserNameInput username={this.props.username} onChange={this.handleChange} />
                    {(!this.state.isValidGamerTag) && this.state.showFormErrors && <FormErrors errors={this.state.formErrors} />}
                </form>
                ) : (
                    <div>
                    <Login username={username} />
                  </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      username: state.UserInfo.username
    }
}

export default connect(mapStateToProps)(UserNameForm)
