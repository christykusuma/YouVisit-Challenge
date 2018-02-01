import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../css/app.css';

import Register from './Register';
import Signin from './Signin';

// Holds all the other components
class App extends Component {
	render() {
		return ( 
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Signin} />
						<Route exact path="/register" component={Register} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
};

export default connect(null, actions)(App);