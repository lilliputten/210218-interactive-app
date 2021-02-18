/** @module config
 *  @description App config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.12.22, 00:32
 */

const config = {
  app: require('./app'),
  build: require('./build'),
  constants: require('./constants'),
  css: require('./css'),
  ui: require('./ui'),
  userAgent: require('./userAgent'),
};

module.exports = config;
