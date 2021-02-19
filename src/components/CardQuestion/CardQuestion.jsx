/** @module CardQuestion
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 04:55
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';
import Variants from 'components/Variants';
import ErrorContainer from 'components/ErrorContainer';
import * as CardData from 'data/CardData';
// import * as CardsHelpers from 'components/CardsHelpers';
import * as CardsStat from 'components/CardsStat';

import './CardQuestion.pcss';

const cnCardQuestion = cn('CardQuestion');

class CardQuestion extends React.PureComponent {

  constructor(props) {
    super(props);
    const { cardId } = props;
    let setState = { cardId };
    const data = CardData.getCardData(cardId);
    if (!data) {
      const error = new Error('Not found card data for id: ' + cardId);
      console.error('CardQuestion: error', error); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      Object.assign(setState, { error });
    }
    else {
      const {
        question,
        variants,
      } = data;
      Object.assign(setState, {
        question,
        variants,
      });
    }
    this.state = setState;
  }

  render() {
    const {
      cardId,
      onSelect,
    } = this.props;
    const {
      error,
      question,
      variants,
    } = this.state;
    if (error) {
      return (
        <ErrorContainer error={error} />
      );
    }
    const totalQuestions = CardData.getTotalCardsCount();
    const questionNo = CardData.getHumanizedCardNumber(cardId);
    return (
      <div className={cnCardQuestion({ cardId })}>
        <div className={cnCardQuestion('Info')}>Вопрос {questionNo} из {totalQuestions}</div>
        <div className={cnCardQuestion('Question')}>{question}</div>
        <Variants
          className={cnCardQuestion('Variants')}
          cardId={cardId}
          variants={variants}
          onSelect={onSelect}
        />
      </div>
    );
  }

}

export default CardQuestion;
