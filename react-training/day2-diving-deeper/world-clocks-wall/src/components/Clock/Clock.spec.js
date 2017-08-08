import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import Clock from './Clock.js'

describe('App', () => {
  it('Test the clock displays the correct label', () => {
      const clock = {
          city: "Tel Aviv", id: 213213, zone: 5
      };
      const clockComponent = ReactTestUtils.renderIntoDocument(<Clock clock={clock} onEdit={() => {}} onRemove={() => {}}/>);
      const labelDiv = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'city-name');
      expect(labelDiv.textContent).to.eq(clock.city);
  });
});
