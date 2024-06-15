// index.js
import { combineReducers } from 'redux';
import userReducer from './userslice'; // Import your individual reducers

const rootReducer = combineReducers({
  user: userReducer, // Add your individual reducers here
});

export default rootReducer;