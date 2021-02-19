/** @module ErrorContainer
 *  @desc Displays error messages
 *  @since 2019.06.20, 13:11
 *  @changed 2020.12.21, 19:00
 */

import React, { PureComponent } from 'react';
import { cn } from '@bem-react/classname';
// import strings from 'helpers/strings'
import * as strings from 'utils/strings';

import './ErrorContainer.pcss';

const cnErrorContainer = cn('ErrorContainer');

class ErrorContainer extends PureComponent {

  getErrorContent(error) {
    // const origError = error;
    if (Array.isArray(error)) {
      error = error.map(this.getErrorContent, this);
    }
    else if (typeof error !== 'object' || !React.isValidElement(error)) { // If not react element...
      // ...prepare text...
      if (error instanceof Error && error.message) {
        error = error.message;
      }
      if (error && typeof error !== 'string') {
        error = String(error);
      }
      if (!error) { // Default message
        error = 'Undefined error'; // TODO: To get error text from languages
      }
      // TODO: To process html text?
      // `strings.html2string`?
      error = strings.splitMultiline(error);
    }
    return error;
  }

  render() {
    const error = this.getErrorContent(this.props.error || this.props.message || this.props.children);
    const { block } = this.props;
    return (
      <div className={cnErrorContainer()}>
        {error}
      </div>
    );
  }

}

export default ErrorContainer;
