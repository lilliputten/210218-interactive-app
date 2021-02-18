/** @module config.build
 *  @description Build management config
 *  @since 2019.09.10, 14:25
 *  @changed 2019.09.10, 14:25
 */

const DEBUG = process.env.DEBUG;
const DEV_DEBUG = process.env.DEV_DEBUG;

module.exports = { // Common-used build variables...

  DEBUG: DEBUG,
  DEV_DEBUG: DEV_DEBUG,

  THEME: process.env.THEME,
  buildTag: process.env.buildTag,
  timestamp: process.env.timestamp,
  timetag: process.env.timetag,
  version: process.env.version,

};
