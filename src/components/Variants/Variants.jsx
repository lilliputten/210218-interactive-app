/** @module Variants
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 04:55
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';
import Button from 'components/Button';

import './Variants.pcss';

const cnVariants = cn('Variants');

const correctPrefix = '(OK) ';

// const Variants = ({ children }) => {
class Variants extends React.PureComponent {

  onClick = ({ id }) => {
    const {
      cardId,
      onCorrect,
      onWrong,
      onSelect,
    } = this.props;
    const isCorrect = (this.correctId && id === this.correctId);
    console.log('Variants:onClick', {
      cardId,
      id,
      isCorrect,
      onCorrect,
      onWrong,
      onSelect,
    });
    if (typeof onSelect === 'function') {
      onSelect({ id, isCorrect });
    }
    const onWrongOrCorrect = isCorrect ? onCorrect : onWrong;
    if (typeof onWrongOrCorrect === 'function') {
      onWrongOrCorrect({ id, isCorrect });
    }
  }

  renderVariant(data, n) {
    if (typeof data === 'string') {
      data = { text: data };
    }
    const id = data.id || String(n);
    if (data.text.startsWith(correctPrefix)) {
      this.correctId = id;
      data.text = data.text.substr(correctPrefix.length);
    }
    return (
      <Button
        key={id}
        id={id}
        size="large"
        theme="variant"
        {...data}
        onClick={this.onClick}
      />
    );
  }

  renderContent() {
    const { children, variants } = this.props;
    let content = variants || children;
    if (Array.isArray(content)) {
      content = content.map(this.renderVariant, this);
    }
    return content;
  }

  render() {
    const content = this.renderContent();
    const { className } = this.props;
    return (
      <div className={cnVariants(null, [className])}>
        {content}
      </div>
    );
  }

}

export default Variants;
