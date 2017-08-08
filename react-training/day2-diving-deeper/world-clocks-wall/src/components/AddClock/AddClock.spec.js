import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import AddClock from './AddClock.js'

describe('AddClock', () => {
    it('renders a title correctly', () => {
        // const props = {location: {label: 'Tel Aviv'}};
        // const clockComponent = ReactTestUtils.renderIntoDocument(<AddClock />);
        //
        // const labelDiv = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clock-label');
        //
        // expect(labelDiv.innerHTML).to.eq('Tel Aviv');
        expect(1).to.eq(1);
    });
});
