import React from 'react';

import Hello from './Hello.js';

export default class HelloB extends React.Component {
    render() {
        return (
            <Hello msg="Hello world from B!" />
        );
    }
}
