import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import _ from 'lodash';

import Location from '../location';
import Clock from './clock';

describe('Clock Component', () => {
  it('should render the passed Label of the Clock', () => {
    const labelElement = {};
    // const localTime = 122333444455555;
    // const clockComponent = ReactTestUtils.renderIntoDocument(<Clock timeInMs={localTime} 
    //                                                             location={Location('Tel Aviv', 0)} />);

    // const labelElement = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clock-label');

    expect(labelElement.textContent).toEqual('Tel Aviv');
  });
});

