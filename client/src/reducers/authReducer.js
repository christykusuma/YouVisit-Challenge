import { FETCH_USER } from '../actions/types';

// Fetches user information, messages and errors
export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
}