import React, { Component } from 'react';
import FormErrors from './FormErrors';
import '../App.css';
import UserNameInput from './UserNameInput'
import { connect } from 'react-redux';
import { updateUserName } from '../Actions/UserInfo';
import { Redirect } from 'react-router-dom';
import {getUser} from '../Actions/GetUser';

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

    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(updateUserName(""));
    }

    handleChange = (event) => {
        this.setState({showFormErrors:false});
        const { dispatch } = this.props;
        dispatch(updateUserName(event.target.value));
    }

    checkGamerTagInput(e) {
        e.preventDefault();
        let newFormErrors = this.state.formErrors;
        let validUsername = this.state.isUserNameValid;
        const { dispatch } = this.props;
        dispatch(getUser(this.props.username));

        if (this.props.username === "") {
            newFormErrors.validGamerTag = 'Please enter a valid gamer tag';
            this.setState({formErrors: newFormErrors, showFormErrors: true, isUserNameValid: validUsername});
        }
        else {
            this.setState({showFormErrors: false, toGameStats: true, isUserNameValid: true, redirectToStats: true });
        }
    }

    render() {
        const {toGameStats} = this.props;
        const {username} = this.props;
        if (this.state.redirectToStats || toGameStats) {
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
                <div className="stats">
                    <h1>Check Your Stats</h1>
                    <form>
                        <p>
                            <UserNameInput  value={username} name="username" onChange={this.handleChange} />
                            <button onClick={e => this.checkGamerTagInput(e)}>Get Stats</button>
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
      username: state.UserInfo.username,
      success: state.GetUser.success
    }
}

export default connect(mapStateToProps)(UserNameForm)
