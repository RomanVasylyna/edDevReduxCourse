// First Reducer (Switch Case)
import counterReducer from './counter';
// Second Reducer (Switch Case)
import loggedReducer from './isLogged';
// Function that combines two reducers into an object that can be passed to store
import { combineReducers } from 'redux';


// Object with two reducers inside
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});


export default allReducers;
