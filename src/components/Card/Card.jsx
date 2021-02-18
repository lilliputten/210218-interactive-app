/** @module Card
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 01:17
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';

import './Card.pcss';

const cnCard = cn('Card');

const Card = () => {
  return (
    <div className={cnCard()}>
      Card
    </div>
  );
};

export default Card;
