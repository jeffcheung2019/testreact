import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'; // Import your root reducer

const initialState = {}; // Define your initial state


// redux-thunk 

// redux-saga

// redux-observable


const store = createStore(
  rootReducer,
  initialState,
);

export default store;

