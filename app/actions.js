const SET_MESSAGE = 'SET_MESSAGE';

export function setMessage(message) {

    console.log('set message!', message);

    return {
        type: SET_MESSAGE,
        message
    };

}

export function thunkMessage(message) {

    console.log('thunked message!', message);

    return function(dispatch) {
        return dispatch(setMessage(message));
    };

}
