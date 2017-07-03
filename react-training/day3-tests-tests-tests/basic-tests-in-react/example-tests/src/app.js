import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {I18nextProvider} from 'react-i18next';
import {wixAxiosConfig} from 'wix-axios-config';
import Root from './Root';
import i18n from './i18n';

const baseUrl = window.__BASEURL__;
const locale = window.__LOCALE__;
const staticsBaseUrl = window.__STATICS_BASE_URL__;

wixAxiosConfig(axios, {baseURL: baseUrl});

ReactDOM.render(
  <I18nextProvider i18n={i18n({locale, baseUrl: staticsBaseUrl})}>
    <Root/>
  </I18nextProvider>,
  document.getElementById('root')
);
