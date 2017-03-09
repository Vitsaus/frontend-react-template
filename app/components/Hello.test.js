import React from 'react';
import Hello from './Hello.js';
import {shallow} from 'enzyme';

test('Should work', () => {
    const hello = shallow(
        <Hello msg='Default message' onClick={jest.fn()}></Hello>
    );
    expect(hello.length).toBe(1);

});
