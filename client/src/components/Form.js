import React from 'react';

const Form = (props) => {

    // Renders sign-in or sign-up form
    const renderContent = () => {
        return (
            <div>
                {props.mode === 'sign-in' 
                ?
                    <div className="signin">
                        <a className="signin-link" href="/"><img src="home.png"/></a>
                        <h2>{props.title}</h2>
                        <form onSubmit={props.handleSignIn} className="signin__form">
                            <label>Username</label>
                            <input
                                className="signin__form--username"
                                type="text"
                                onChange={props.setStateUsername}
                            />
                            <br/>
                            <label>Password</label>
                            <input
                                className="signin__form--password"
                                type="password"
                                onChange={props.setStatePassword}
                            />
                            <br/>
                            <input 
                                className="signin__form--submit"
                                type="submit" 
                                value="Sign In" />
                        </form>
                        <br/>
                        <a className="signup-link" href="/register">Create a new account</a>
                    </div>
                :
                    <div className="signup">
                        <a className="signin-link" href="/"><img src="home.png"/></a>
                        <h2>{props.title}</h2>
                        <form onSubmit={props.handleSignUp} className="signup__form">
                            <label>Name</label>
                            <input
                                className="signup__form--name"
                                type="text"
                                onChange={props.setStateName}
                            />
                            <br/>
                            <label>Username</label>
                            <input
                                className="signup__form--username"
                                type="text"
                                onChange={props.setStateUsername}
                            />
                            <br/>
                            <span className="signup__form--req">(minimum length 4 chars, alphanumeric only)</span>
                            <label>Password</label>
                            <input
                                className="signup__form--password"
                                type="password"
                                onChange={props.setStatePassword}
                            />
                            <span className="signup__form--req">(minimum length 4 chars)</span>
                            <br/>
                            <input 
                                className="signup__form--submit"
                                type="submit" 
                                value="Sign Up" />
                        </form>
                    </div>
                }
            </div>
        );
    }

    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default Form;