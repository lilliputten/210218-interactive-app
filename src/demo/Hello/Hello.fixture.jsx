/** @module Hello.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.05, 20:31
 */

import React from 'react';
import Hello from './Hello';

// Title for demo rendering
export const demoTitle = 'Hello example fixture';

/* // EXAMPLE: fixture content wrapper
 * export const DemoWrapper = ({ children }) => {
 *   return (
 *     <xmp>
 *       {children}
 *     </xmp>
 *   )
 * }
 */

export default {
  // basic: <Hello />,
  aloha: <Hello greeting="Aloha" name="Alexa" />,
};
