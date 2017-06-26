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
});

