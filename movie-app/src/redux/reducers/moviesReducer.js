import {ALLMOVIES} from '../types/movieType'

const initialValue = { movies: [], pageCount: 0 }
export const moviesReducer = (state = initialValue, action)=>{

    switch(action.type){
        case ALLMOVIES :
            return{
                movies: action.data
            }
        default : return state;
    }
}

// action.data = action.payload : data c'est 

// ---Explication by Chat GPT:---
// This code defines a reducer function called moviesReducer that manages the state of movies in a React application. The reducer takes in two parameters: state and action.

// The state parameter is the current state of the application, and it is set to an initial value of an object with an empty array of movies and a page count of 0.

// The action parameter is an object that describes an action that has been dispatched, it contains a type and payload.

// The switch statement checks the type property of the action object. If the type is ALLMOVIES, it returns a new object with a movies property that is set to the value of the data property of the action object.

// If the type does not match any of the cases, it returns the current state.

// The reducer looks for a specific action type ALLMOVIES and when it receives this action it updates the state with the data payload of the action.

// The default case will simply return the current state, this will be the state before the action was dispatched.