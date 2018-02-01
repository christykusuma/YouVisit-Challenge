import axios from 'axios';
import { FETCH_USER } from './types';

// Submits new user into the database (sign up)
export const submitUser = user => async (dispatch) => {

    // Console logs recently submitted user information
    console.log('Submitting user into database', user);

    // Submits post request to server-side
	const res = await axios.post('/api/register', {
		...user
	});

    // Console logs appropiate message
	console.log(res.data);

    // Updates view by sending information to reducers
	dispatch({ type: FETCH_USER, payload: res.data });
};

// Checks to see if user is currently in the database (sign in)
export const confirmUser = user => async (dispatch) => {

    // Console logs recently submitted user information
    console.log('Checking if user is in database', user);

    // Submits post request to server-side
    const res = await axios.post('/api/current_user', {
        ...user
    });

    // Console logs appropiate message
    console.log(res.data);   

    // Updates view by sending information to reducers
    dispatch({ type: FETCH_USER, payload: res.data });
};


