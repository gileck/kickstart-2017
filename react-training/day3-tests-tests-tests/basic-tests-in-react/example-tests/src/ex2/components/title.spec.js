import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {expect} from 'chai';

import Title from './title';

describe('Title Component', () => {

  it('should render an H1 title with a text in it', () => {
    const titleComp = ReactTestUtils.renderIntoDocument(<Title text="I LOVE YOU!"/>);

    const h1Title = ReactTestUtils.findRenderedDOMComponentWithTag(titleComp, 'h1');

    expect(h1Title.innerHTML).to.eq('I LOVE YOU!');
  });

  describe('when clicking the title', () => {
    it('should show a subtitle element with "1" in the click count', () => {
      const titleComp = ReactTestUtils.renderIntoDocument(<Title text="I LOVE YOU!"/>);

      const h1Title = ReactTestUtils.findRenderedDOMComponentWithTag(titleComp, 'h1');
      ReactTestUtils.Simulate.click(h1Title);

      const subtitle = ReactTestUtils.findRenderedDOMComponentWithClass(titleComp, 'subtitle');
      expect(subtitle.innerHTML).to.eq('1');
    });

    it('should show a subtitle element with "3" when clicking the Title 3 times', () => {
      const titleComp = ReactTestUtils.renderIntoDocument(<Title text="I LOVE YOU!"/>);

      const h1Title = ReactTestUtils.findRenderedDOMComponentWithTag(titleComp, 'h1');
      ReactTestUtils.Simulate.click(h1Title);
      ReactTestUtils.Simulate.click(h1Title);
      ReactTestUtils.Simulate.click(h1Title);

      const subtitle = ReactTestUtils.findRenderedDOMComponentWithClass(titleComp, 'subtitle');
      expect(subtitle.innerHTML).to.eq('3');
    });
  });

});
