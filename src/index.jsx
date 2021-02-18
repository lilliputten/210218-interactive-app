/** @module demo
 *  @desc Demo app entry point
 *  @since 2021.02.19, 00:55
 *  @changed 2021.02.19, 00:55
 */
/* eslint-disable react/jsx-max-depth */

import 'es5-shim/es5-shim';
import 'es5-shim/es5-sham';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import { render } from 'react-dom';

import CardsApp from 'components/CardsApp';

// import * as demoSupport from './demoSupport';

import config from 'config';
import cardsData from './cards-data.yaml';

// Set cards data to config
config.cardsData = cardsData;

// Demo app styles
import './index.pcss';

const content = (
  <CardsApp />
);

render(content, document.getElementById('Root'));
