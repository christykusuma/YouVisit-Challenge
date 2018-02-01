import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import action functions
import { confirmUser } from '../actions/index';

import Form from '../components/Form';
import Error from '../components/Error';

// Renders sign in with error message

// Design decisions:
// Error messages will appear at the very top of the page
// Clicking on the YouVisit logo will return you to the home page (sign-in)
class Signin extends Component {
    constructor(props) {
        super(props);
        
        // Initialize state
        this.state = {
            username: '',
            password: ''
        }

        // Binds functions to the class component
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    // Handles sign in by calling action creator
    handleSignIn = (event) => {
        event.preventDefault();

        // Submits with updated states
        this.props.confirmUser({
            username: this.state.username,
            password: this.state.password
        });
    }

    renderContent() {
        // If user is not logged in
        if (this.props.auth === null) {
            return (
                <div>
                    < Form 
                        title = 'Sign In'
                        handleSignIn = {this.handleSignIn}
                        mode = 'sign-in'
                        setStateUsername = {event => this.setState({ username: event.target.value })}
                        setStatePassword = {event => this.setState({ password: event.target.value })}
                    />
                </div>
            );
            // If user is logged in
        } else if (this.props.auth.Status === 1) {
            return (
                <div>
                    <p className="welcome">
                        <a className="signin-link" href="/"><img src="home.png"/></a>
                        <br/>
                        Welcome {this.props.auth.Name}! <br/>
                        <hr/>
                        Username: {this.props.auth.Username} <br/>
                        User ID: {this.props.auth.Userid}
                    </p>
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
                        title = 'Sign In'
                        handleSignIn = {this.handleSignIn}
                        mode = 'sign-in'
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
        )
    }
}

// Connects to reducers
function mapStateToProps({ auth }) {
	return { auth: auth };
}

// Connects to action creators
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        confirmUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);