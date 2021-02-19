/** @module CardsHelpers
 *  @since 2021.02.19, 00:58
 *  @changed 2021.02.19, 00:58
 */

import { getFirstCardId } from 'data/CardData';
import config from 'config';

export function goToHashUrl(url) {
  window.location.href = '#' + url;
}

export function goToCard(id) {
  const { cardUrlPrefix, finishUrl } = config.app;
  const link = id ? cardUrlPrefix + id : finishUrl;
  goToHashUrl(link);
}

export function goToFirstCard() {
  const id = getFirstCardId();
  goToCard(id);
}

export function goToStart() {
  const { startUrl } = config.app;
  goToHashUrl(startUrl);
}

export function goToFinish() {
  const { finishUrl } = config.app;
  goToHashUrl(finishUrl);
}
