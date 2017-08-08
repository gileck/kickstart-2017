import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import Clocks from './Clocks.js'

describe('Clocks', () => {
    it('renders a title correctly', () => {

        //     const clocks = [
        //         {"city": "Jerusalem","zone": 2, "id": 123123},{"city": "New York", "zone": 5, "id": 24234}, {"city": "London", "zone": 9, "id": 167453},
        //         {"city": "Tel Aviv","zone": 3, "id": 163113},{"city": "Los Angeles", "zone": 3, "id": 26234},{"city": "Munich", "zone": 2, "id": 16732513}
        //     ];
        //
        // // const props = {location: {label: 'Tel Aviv'}};
        // const clockComponent = ReactTestUtils.renderIntoDocument(<Clocks clocks={clocks}  onEdit={() => {}} onRemove={() => {}}/>);
        // //
        // const labelDiv = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clock-label');
        // //
        // expect(labelDiv.innerHTML).to.eq('Tel Aviv');
        // expect(1).to.eq(1);
    });
});
