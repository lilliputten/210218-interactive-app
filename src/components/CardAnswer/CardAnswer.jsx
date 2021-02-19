/** @module CardAnswer
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 04:55
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';
import Actions from 'components/Actions';
import Button from 'components/Button';
import ErrorContainer from 'components/ErrorContainer';
import * as CardData from 'data/CardData';
// import { getCardData } from 'data/CardData';

import './CardAnswer.pcss';

const cnCardAnswer = cn('CardAnswer');

class CardAnswer extends React.PureComponent {

  constructor(props) {
    super(props);
    const { cardId } = props;
    let setState = { cardId };
    const data = CardData.getCardData(cardId);
    if (!data) {
      const error = new Error('Not found card data for id: ' + cardId);
      console.error('CardAnswer: error', error); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      Object.assign(setState, { error });
    }
    else {
      const {
        answer,
      } = data;
      Object.assign(setState, {
        answer,
      });
    }
    this.state = setState;
  }

  render() {
    const {
      cardId,
      onNext,
      isCorrect,
    } = this.props;
    const {
      error,
      answer,
    } = this.state;
    if (error) {
      return (
        <ErrorContainer error={error} />
      );
    }
    const resultText = isCorrect ? 'Верно' : 'Неверно';
    const totalQuestions = CardData.getTotalCardsCount();
    const questionNo = CardData.getHumanizedCardNumber(cardId);
    const isLastCard = questionNo === totalQuestions;
    const butttonText = isLastCard ? 'Посмотреть результаты' : 'Далее';
    return (
      <div className={cnCardAnswer({ cardId, correct: isCorrect })}>
        <div className={cnCardAnswer('Result')}>{resultText}</div>
        <div className={cnCardAnswer('Text')}>{answer}</div>
        <Actions className={cnCardAnswer('Actions')}>
          <Button
            text={butttonText}
            onClick={onNext}
          />
        </Actions>
      </div>
    );
  }

}

export default CardAnswer;
