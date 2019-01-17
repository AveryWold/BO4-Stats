import React, { Component } from 'react';
import FormErrors from './FormErrors';
import '../App.css';
import UserNameInput from './UserNameInput'
import Login from './Login';

class UserNameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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

    handleChange(event) {
        // event.preventDefault();
        this.setState({
            username: event.target.value,
        });
    }
    // handleChange = (event) => {
    //     const { dispatch } = this.props;
    //     dispatch(updateUserName(event.target.value));
    // }

    checkGamerTagInput(e) {
        e.preventDefault();
        // CONST DOESN'T WORK?
        // const {username} = this.state.username;
        console.log(this.state.username, "Validating");

        let newFormErrors = this.state.formErrors;
        if (this.state.username === "") {
            newFormErrors.validGamerTag = 'Please enter your gamer tag'
            this.setState({formErrors: newFormErrors, showFormErrors: true})
        }
        else {
            this.setState({showFormErrors: false, toGameStats: true, isValidGamerTag: true  });
        }
    }

    render() {
        const {toGameStats, username} = this.state;
        return (
            <div className="form">
                {!toGameStats ? (
                <form onSubmit={this.checkGamerTagInput.bind(this)}>
                    <UserNameInput username={this.props.username} onChange={this.handleChange} />
                    {(!this.state.isValidGamerTag) && this.state.showFormErrors && <FormErrors errors={this.state.formErrors} />}
                </form>
                ) : (
                    <div>
                    <Login username={username} toGameStats={toGameStats} />
                  </div>
                )}
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//       username: state.UserInfo.username
//     }
// }

// export default connect(mapStateToProps)(UserNameForm)
export default(UserNameForm)