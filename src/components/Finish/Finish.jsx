/** @module Finish
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 01:17
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';
import Actions from 'components/Actions';
import Button from 'components/Button';
import * as CardData from 'data/CardData';
import * as CardsHelpers from 'components/CardsHelpers';
import * as CardsStat from 'components/CardsStat';

import './Finish.pcss';

const cnFinish = cn('Finish');

class Finish extends React.PureComponent {

  onRestart = () => {
    CardsStat.resetStat();
    CardsHelpers.goToFirstCard();
  }

  render() {
    const actionsContent = (
      <Button text="Начать заново" onClick={this.onRestart} />
    );
    const totalQuestions = CardData.getTotalCardsCount();
    const answeredQuestions = CardsStat.getCorrectAnswersCount();
    return (
      <div className={cnFinish()}>
        <div className={cnFinish('Text')}>Правильных ответов: {answeredQuestions} из {totalQuestions}.</div>
        <Actions className={cnFinish('Actions')}>{actionsContent}</Actions>
      </div>
    );
  }

}

export default Finish;
