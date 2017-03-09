import React from 'react';
import Button from './Button.js';
import {shallow} from 'enzyme';

test('Text should match', () => {
    const button = shallow(
        <Button></Button>
    );
    expect(button.length).toBe(1);
});
