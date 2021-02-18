/** @module CardsApp
 *  @since 2021.02.19, 00:58
 *  @changed 2021.02.19, 00:58
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';
import { // Router...
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Intro from 'components/Intro';
import Card from 'components/Card';

import './CardsApp.pcss';

// import Image from './img/LockColor2.svg';

const cnCardsApp = cn('CardsApp');

const CardsApp = () => {
  const className = cnCardsApp();
  // const { cardsData } = config;
  // console.log('CardsApp:DEBUG', {
  //   cardsData,
  // });
  // debugger;
  return (
    <div className={className} title="CardsApp">
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/card/:cardId" component={Card} />
        </Switch>
      </Router>
    </div>
  );
};

export default CardsApp;
