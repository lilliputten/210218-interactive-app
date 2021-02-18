/** @module domUtils
 *  @class domUtils
 *  @since 2019.06.14, 12:20
 *  @changed 2020.12.21, 18:05
 */

/** Add class name
 * @param {String} tag
 * @return {DOM|undefined} domNode
 */
export function getDocumentDomNodeByTag(tag) {
  const result = document.getElementsByTagName(tag.toUpperCase());
  return result && result[0];
}

/** Check for class name
 * @param {DOM} domNode
 * @param {String} className
 * @return {Boolean}
 */
export function hasClassName(domNode, className) {
  if (domNode) {
    const { classList } = domNode;
    return classList.contains(className);
  }
}

/** Add class name
 * @param {DOM} domNode
 * @param {String} className
 * @return {DOM} domNode
 */
export function addClassName(domNode, className) {
  if (domNode && !hasClassName(domNode, className)) {
    const { classList } = domNode;
    classList.add(className);
  }
  return domNode;
}

/** Remove class name
 * @param {DOM} domNode
 * @param {String} className
 * @return {DOM} domNode
 */
export function removeClassName(domNode, className) {
  if (domNode && hasClassName(domNode, className)) {
    const { classList } = domNode;
    classList.remove(className);
  }
  return domNode;
}
