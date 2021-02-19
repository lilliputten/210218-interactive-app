/** @module CardsApp
 *  @since 2021.02.19, 00:58
 *  @changed 2021.02.19, 00:58
 */

import React from 'react';
import { cn } from '@bem-react/classname';
import config from 'config';
import { // Router...
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Start from 'components/Start';
import Finish from 'components/Finish';
import Card from 'components/Card';
import NotFoundPage from 'components/NotFoundPage';

import './CardsApp.pcss';

const cnCardsApp = cn('CardsApp');

const CardsApp = () => {
  const { cardUrlPrefix, finishUrl } = config.app;
  const cardPath = cardUrlPrefix + ':cardId';
  return (
    <div className={cnCardsApp()}>
      <Router>
        <Switch>
          {/*
          <Route exact path={finishUrl} component={Finish} />
          */}
          <Route exact path="/" component={Start} />
          <Route path={cardPath} component={Card} />
          <Route exact path={finishUrl} component={Finish} />
          <Route path="*" exact component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default CardsApp;
