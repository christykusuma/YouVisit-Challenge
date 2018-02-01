import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Combines all the reducers
export default combineReducers({
    auth: authReducer,
});