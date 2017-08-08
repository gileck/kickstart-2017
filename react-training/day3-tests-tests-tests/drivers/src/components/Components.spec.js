import 'jsdom-global/register';

import React from 'react';
import ReactDOM from 'react-dom';

import chai,{expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);


import {Title, SimpleGallery, Heading, TodoItem, TodoItem2, TodoApp, Framer,SimpleCanvas, SimpleCanvas2, SpecialButton} from './Components';

import {expect} from 'chai';

const renderComp = comp => {
  const div = document.createElement('div');
  ReactDOM.render(comp, div);
  return div;
};

const createTitleDriver = wrapper => ({
  getText: () => wrapper.querySelector('h1').textContent
});

const createGalleryDriver = comp => ({
    getImages: () => comp.querySelectorAll("img")
});

const createSpecialButtonDriver = comp => ({
    getButton: () => comp.querySelector("button");
});

describe('components', () => {
  describe('title', () => {
    it('should render the passed title', () => {
      const div = renderComp(<Title text='bob'/>);
      const driver = createTitleDriver(div);
      expect(driver.getText()).to.eql('bob');
    });
  });

  describe('simple gallery', () => {
    it('should render images given', () => {
      const images = ["1","2","3"];
      const elem = renderComp(<SimpleGallery images={images}/>);
      const driver = createGalleryDriver(elem);
      expect(images.length).to.eql(driver.getImages().length);
    });
  });

    describe('special button', () => {
    it('should call the normal handler when clicked', () => {
        const spyClick = sinon.spy();
        const spySpecialClick = sinon.spy();
        const elem = renderComp(<SpecialButton onSpecialClick={spyClick} onClick={spySpecialClick} />);
        const driver = createSpecialButtonDriver(elem);


    });

    it('BONUS: should call the normal handler when specially clicked', () => {

    });
  });

});
