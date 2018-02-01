import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import action functions
import { submitUser } from '../actions/index';

import Error from '../components/Error';
import Form from '../components/Form';

// Renders sign up with error message

// Design decisions:
// Error messages will appear at the very top of the page
// Clicking on the YouVisit logo will return you to the home page (sign-in)
// Username/password requirements are written below the inputs to remind user
class Register extends Component {
    constructor(props) {
        super(props);
        
        // Initialize state
        this.state = {
            name: '',
            username: '',
            password: ''
        }

        // Binds functions to the class component
        this.handleSignUp = this.handleSignUp.bind(this);

    }

    // Handles sign up by calling action creator
    handleSignUp = (event) => {
        event.preventDefault();
        
        // Submits with updated states
        this.props.submitUser({
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        });
    }

    renderContent() {
        // If user hasn't signed up
        if (this.props.auth === null) {
            return (
                <div>
                    < Form 
                        title = 'Sign Up'
                        handleSignUp = {this.handleSignUp}
                        mode = 'sign-up'
                        setStateName = {event => this.setState({ name: event.target.value })}
                        setStateUsername = {event => this.setState({ username: event.target.value })}
                        setStatePassword = {event => this.setState({ password: event.target.value })}
                    />
                </div>
            );
            // If user successfully signs up
        } else if (this.props.auth.Status === 1) {
            return (
                <div class="welcome">
                    <a className="signin-link" href="/"><img src="home.png"/></a>
                    <br/>
                    {this.props.auth.Message}
                </div>
            );
            // If there is an error
        } else {
            return (
                <div>
                    < Error 
                        auth = {this.props.auth}
                    />
                    < Form 
                        title = 'Sign Up'
                        handleSignUp = {this.handleSignUp}
                        mode = 'sign-up'
                        setStateName = {event => this.setState({ name: event.target.value })}
                        setStateUsername = {event => this.setState({ username: event.target.value })}
                        setStatePassword = {event => this.setState({ password: event.target.value })}
                    />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

// Connects to reducers
function mapStateToProps({ auth }) {
	return { auth: auth };
}

// Connects to action creators
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        submitUser 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);