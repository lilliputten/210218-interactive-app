/** @module Intro
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 01:17
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';

import './Intro.pcss';

const cnIntro = cn('Intro');

const Intro = () => {
  return (
    <div className={cnIntro()}>
      Intro
    </div>
  );
};

export default Intro;
