/** @module AdminIndex
 *  @since 2020.04.27, 18:13
 *  @changed 2020.04.27, 20:41
 */

import React from 'react';
import { cn } from '@bem-react/classname';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle as faError,
} from '@fortawesome/free-solid-svg-icons';

import './NotFoundPage.pcss';

const cnNotFoundPage = cn('NotFoundPage');

const NotFoundPage = (props) => {
  const {
    match: { url }
  } = props;
  const templateProps = { url };
  const textTemplate = 'Вы пытались открыть страницу с адресом "{url}". Страницы для этого адреса не существует.';
  const text = textTemplate.replace(/{(\w+)}/g, (match, id) => {
    return templateProps[id] || match;
  });
  return (
    <div className={cnNotFoundPage()}>
      <div className={cnNotFoundPage('Content')}>
        <span className={cnNotFoundPage('Icon')}>
          <FontAwesomeIcon icon={faError} />
        </span>
        <span className={cnNotFoundPage('Details')}>
          <h1 className={cnNotFoundPage('Title')}>Страница не найдена</h1>
          <p className={cnNotFoundPage('Text')}>{text}</p>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  thisLang: store.language.components.NotFoundPage,
});
export default NotFoundPage;
