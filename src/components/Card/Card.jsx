/** @module Card
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 04:55
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';
import ErrorContainer from 'components/ErrorContainer';
// import { getCardData, getNextCardId } from 'data/CardData';
import * as CardData from 'data/CardData';
import CardQuestion from 'components/CardQuestion';
import CardAnswer from 'components/CardAnswer';
import * as CardsHelpers from 'components/CardsHelpers';
import * as CardsStat from 'components/CardsStat';

import './Card.pcss';

const cnCard = cn('Card');

class Card extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match: { params: { cardId } } } = this.props;
    this.setCardData(cardId);
    // TODO: Animate in?
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { cardId: prevCardId } } } = prevProps;
    const { match: { params: { cardId } } } = this.props;
    if (cardId !== prevCardId) {
      this.setCardData(cardId);
      // TODO: Animate card change?
    }
  }

  setCardData(cardId, cb) {
    let setState = { isAnswered: false, isCorrect: null, cardId };
    const data = CardData.getCardData(cardId);
    if (!data) {
      const error = new Error('Not found card data for id: ' + cardId);
      console.error('Card: error', error); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      setState.error = error;
    }
    else {
      setState.nextCardId = data.nextCardId || CardData.getNextCardId(cardId);
    }
    this.setState(setState, cb);
  }

  onSelect = ({ isCorrect }) => {
    if (isCorrect) {
      CardsStat.accountCorrectAnswer();
    }
    this.setState({ isAnswered: true, isCorrect });
  }

  onNext = () => {
    const { nextCardId } = this.state;
    if (nextCardId) {
      CardsHelpers.goToCard(nextCardId);
    }
    else {
      CardsHelpers.goToFinish();
    }
    // const { cardUrlPrefix, finishUrl } = config.app;
    // const link = '#' + (nextCardId ? cardUrlPrefix + nextCardId : finish);
    // debugger;
    // window.location.href = link;
    // // TODO: Final animation?
  }

  renderQuestion() {
    const {
      cardId,
    } = this.state;
    const renderProps = {
      cardId,
      onSelect: this.onSelect,
    };
    return (
      <CardQuestion {...renderProps} />
    );
  }

  renderAnswer() {
    const {
      cardId,
      isCorrect,
    } = this.state;
    const renderProps = {
      cardId,
      isCorrect,
      onNext: this.onNext,
    };
    return (
      <CardAnswer {...renderProps} />
    );
  }

  render() {
    const {
      cardId,
      error,
      isAnswered,
    } = this.state;
    if (error) { // Error?
      return (
        <ErrorContainer error={error} />
      );
    }
    if (!cardId) { // Not ready
      return null;
    }
    const content = isAnswered ? this.renderAnswer() : this.renderQuestion();
    return (
      <div key={cardId} className={cnCard({ cardId })}>
        {content}
      </div>
    );
  }

}

export default Card;
