import React from 'react';

import Hello from './Hello.js';

export default class HelloC extends React.Component {
    render() {
        return (
            <Hello msg="Hello world from C!" />
        );
    }
}
