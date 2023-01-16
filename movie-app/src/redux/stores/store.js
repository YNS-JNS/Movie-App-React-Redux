// for use createStore
import {createStore, applyMiddleware} from 'redux';
// importing our moviesReducer
import {moviesReducer} from '../reducers/moviesReducer'
// for devtools extension debugging
// import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

// creation 
export const store = createStore(moviesReducer, applyMiddleware(thunk));
