/** @module CardData
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 04:55
 */

import cardsData from 'data/cards-data.yaml';

const { cards } = cardsData;
const cardIds = Object.keys(cards);

// export { cardsData, cards, cardIds };

export function getTotalCardsCount() {
  return cardIds.length;
}

export function getCardData(id) {
  return cards[id];
}

export function getFirstCardId() {
  return cardIds[0];
}

export function getCardNumber(id) {
  for (let i = 0; i < cardIds.length; i++) {
    if (cardIds[i] === id) {
      return i;
    }
  }
  return -1;
}

export function getHumanizedCardNumber(id) {
  return getCardNumber(id) + 1;
}

export function getNextCardId(id) {
  for (let i = 0; i < cardIds.length; i++) {
    if (cardIds[i] === id) {
      return cardIds[i + 1];
    }
  }
}

export function getPrevCardId(id) {
  let prevId;
  for (let i = 0; i < cardIds.length; i++) {
    const currId = cardIds[i];
    if (currId === id) {
      return prevId;
    }
    prevId = currId;
  }
}
