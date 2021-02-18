/** @module lang
 *  @desc Language support tools
 *  @since 2021.01.11, 18:21
 *  @changed 2021.01.11, 20:14
 */

import config from 'config';

export function setLang(lang) {
  // console.log('WebUiCore:utils:lang:setLang', lang)
  // debugger
  config.app.lang = lang;
}
export function getLang() {
  return config.app.lang;
}
export function getCommonLangText(id, defaultText, propsLang) {
  const lang = propsLang || getLang();
  const text = lang && lang.components && lang.components.common && lang.components.common[id];
  // console.log('WebUiCore:utils:lang:getCommonLangText', id, lang)
  // debugger
  return (text != null) ? text : (defaultText || id);
}
