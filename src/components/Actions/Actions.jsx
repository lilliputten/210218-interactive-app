/** @module Actions
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 01:17
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';
import Button from 'components/Button';

import './Actions.pcss';

const cnActions = cn('Actions');

const Actions = ({ children, actions }) => {
  let content = actions || children;
  if (Array.isArray(children)) {
    content = children.map((itemData, n) => {
      const key = itemData.id || String(n);
      return (
        <Button key={key} {...itemData} />
      );
    });
  }
  return (
    <div className={cnActions()}>
      {content}
    </div>
  );
};

export default Actions;
