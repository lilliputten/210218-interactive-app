/** @module Start
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 01:17
 */

import React from 'react';
import { cn } from '@bem-react/classname';
import Actions from 'components/Actions';
import Button from 'components/Button';
import * as CardsHelpers from 'components/CardsHelpers';
import * as CardsStat from 'components/CardsStat';

import './Start.pcss';

const cnStart = cn('Start');

class Start extends React.PureComponent {

  constructor(props) {
    super(props);
    CardsStat.resetStat();
  }

  onStart = () => {
    CardsHelpers.goToFirstCard();
    // const firstCardId = getFirstCardId();
    // const { cardUrlPrefix } = config.app;
    // const link = '#' + cardUrlPrefix + firstCardId;
    // window.location.href = link;
  }

  render() {
    const actionsContent = (
      <Button text="Начать" onClick={this.onStart} />
    );
    return (
      <div className={cnStart()}>
        <p className={cnStart('Text')}>Теперь попробуйте убрать из личного дела документы, которые гарантируют штраф от инспекторов.</p>
        <Actions className={cnStart('Actions')}>{actionsContent}</Actions>
      </div>
    );
  }

}

export default Start;
