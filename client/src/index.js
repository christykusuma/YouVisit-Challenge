import React from 'react';
import ReactDOM from 'react-dom';

// Glue between react and redux (reaches into store)
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './containers/App';

// Logger middleware
const logger = store => {
	return next => {
		return action => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] Updated State', store.getState());
			return result;
		}
	}
};

// Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store contains all the reducers
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk, logger)));

// Connects redux store to App.js
ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
); 
