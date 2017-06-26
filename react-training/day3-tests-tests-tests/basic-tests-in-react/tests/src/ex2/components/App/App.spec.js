import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import i18next from 'i18next';
import {I18nextProvider} from 'react-i18next';
import App from './App';
import translation from '../../../assets/locale/messages_en.json';

const i18nData = {
  lng: 'en',
  keySeparator: '$',
  resources: {
    en: {translation}
  }
};

describe('App', () => {
  let wrapper;

  afterEach(() => wrapper && wrapper.detach());

  it('should check how much is 1 + 2', () => {
    expect(1 + 2).to.eq(3);
  });

  it('renders a title correctly', () => {
    wrapper = mount(
      <I18nextProvider i18n={i18next.init(i18nData)}>
        <App/>
      </I18nextProvider>,
      {attachTo: document.createElement('div')}
    );
    expect(wrapper.find('h1').length).to.eq(1);
  });
});
