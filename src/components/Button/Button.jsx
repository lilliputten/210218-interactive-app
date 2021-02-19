/** @module Button
 *  @since 2021.02.19, 01:16
 *  @changed 2021.02.19, 01:17
 */

import React from 'react';
import { cn } from '@bem-react/classname';
// import config from 'config';

import './Button.pcss';

const cnButton = cn('Button');

// const Button = (props) => {
class Button extends React.PureComponent {

  onClick = (ev) => {
    const {
      id,
      onClick,
      link,
    } = this.props;
    if (typeof onClick === 'function') {
      onClick({ id });
    }
    else if (link) {
      window.location.href = link;
    }
  }

  getClassName() {
    const {
      disabled,
      theme,
      className,
    } = this.props;
    const classProps = {
      disabled,
      theme,
    };
    return cnButton(classProps, [className]);
  }

  render() {
    const {
      id,
      text,
      disabled,
    } = this.props;
    const renderProps = {
      id,
      className: this.getClassName(),
      onClick: this.onClick,
      disabled,
    };
    return (
      <button type="button" {...renderProps}>
        <span className={cnButton('Text')}>{text}</span>
      </button>
    );
  }

}

export default Button;
