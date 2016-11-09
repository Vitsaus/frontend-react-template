import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const initialState = {
    message: 'Initial message'
};

function message(state = initialState, action) {

    switch (action.type) {

    case 'SET_MESSAGE':
        return Object.assign({}, state, { message: action.message });
    default:
        return state;

    }

}

const app = combineReducers({
    message: message,
    routing: routerReducer
});

export default app;
