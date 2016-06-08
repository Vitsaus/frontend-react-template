const SET_MESSAGE = 'SET_MESSAGE';

export function setMessage(message) {

    console.log('set message!', message);

    return {
        type: SET_MESSAGE,
        message
    };

}

export function thunkMessage(message) {

    return function(dispatch, getStore) {

        console.log('thunked message!', message, getStore().message);

        return dispatch(setMessage(message));

    };

}
