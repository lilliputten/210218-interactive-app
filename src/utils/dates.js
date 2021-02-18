/** @module dates
 *  @description Objects utilities
 *  @since 2021.01.23, 20:29
 *  @changed 2021.01.23, 21:11
 */

import moment from 'moment';
import {
  // compareAsc,
  format,
} from 'date-fns';
import config from 'config';

// Export constants...

export const dayTicks = 1000 * 60 * 60 * 24;
export const weekTicks = dayTicks * 7;

/** Get date type
 * @param {Date|Moment|number} date
 * @return {String} dateType ('number', 'object', 'moment', 'msDateStr')
 * msDateStr: '/Date(1498653276417+0300)/'
 */
export function detectDateValueType(date) {
  if (date == null) {
    return undefined;
  }
  const dateType = typeof date;
  if (dateType === 'object') { // TODO: Determine moment object
    if (date instanceof moment) {
      return 'moment';
    }
  }
  else if (dateType === 'string') {
    if (date.startsWith('Date(')) {
      return 'msDateStr';
    }
  }
  return dateType;
}

export function convertToDateObject(date) {
  const dateType = detectDateValueType(date);
  let result = date;
  if (dateType !== 'object') {
    if (dateType === 'msDateStr') {
      result = parseInt(result.substr(5)); // 'Date(*' -> number
    }
    else if (dateType === 'number' || dateType === 'msDateStr') {
      result = new Date(result);
    }
    else if (dateType === 'moment') {
      result = date.toDate();
    }
  }
  return result;
}

/** Convert any date (date object, moment object, milliseconds timestamp) to microsoft date string ('Date(timestamp+xxxx)')
 * @param {Date|Number|Moment} date - Date object or milliseconds date value
 * @return {String}
 */
export function toMicrosoftDateTime(date) {
  if (typeof date === 'number') { // Milliseconds passed?
    // TODO: Use timestamp number to compose ms date (which offset should we to use?)
    date = new Date(date);
  }
  else if (date instanceof moment) {
    date = date.toDate();
  }
  // TODO: To check for valid date object?
  // const offset = date.toString().replace(/^.*GMT\s*([+-]\d+).*$/, '$1') // ???
  const match = date.toString().match(/GMT\s*([+-]\d+)/);
  const offset = match && match[1] || '';
  const format = String(date.getTime()) + offset;
  return '/Date(' + format + ')/';
  /* // OLD CODE:
   * const offset = () => {
   *   const hours = date.getTimezoneOffset() / 60
   *   let doubleOrNot = Math.abs(date.getTimezoneOffset()) / 60
   *   if (doubleOrNot < 10) {
   *     doubleOrNot = `+0${doubleOrNot.toString()}00`
   *   }
   *   return doubleOrNot
   * }
   * const format = () => String(date.getTime()) + String(offset())
   * return `/Date(${format()})/`
   */
}

export function convertDateToType(date, targetType) {
  // const type = detectDateValueType(date);
  let result = date;
  if (targetType !== 'object') {
    if (targetType === 'moment') {
      return moment(date);
    }
    else if (targetType === 'number') {
      result = date.getTime();
    }
    else if (targetType === 'msDateStr') {
      result = toMicrosoftDateTime(date);
    }
  }
  return result;
}

export function formatDateToString(date, fmt, opt = {}) {
  fmt = fmt || config.constants.dateFormat;
  // @see https://date-fns.org/v2.16.1/docs/format
  return format(convertToDateObject(date), fmt, opt);
}

export function formatDateTimeToString(date, opt = {}) {
  const fmt = opt.showTime ? config.constants.dateTimeFormat : config.constants.dateFormat;
  // @see https://date-fns.org/v2.16.1/docs/format
  return format(convertToDateObject(date), fmt, opt);
}

/** adjustDateValue -- Adjust date to day/interval start/end.
 * @param {Date|Number|moment|msDateStr} origDate - date (in any format)
 * @param {Boolean} [toEnd=false] -- Adjust to end
 * @param {Boolean} [toTime=false] -- Adjust to time periods (timeIntervals)
 * @param {Number} [timeIntervals=60] -- Time period to adjust (in minutes)
 * @return {Date|Number|moment|msDateStr} adjustedDate -- Date in the input format
 */
export function adjustDateValue(origDate, toEnd, toTime, timeIntervals = 60) {
  const dateType = detectDateValueType(origDate);
  let date;
  if (dateType === 'object') { // Just clone date object
    date = new Date(origDate.getTime());
  }
  else {
    date = convertToDateObject(origDate);
  }
  if (!toTime) {
    if (toEnd) {
      date.setHours(23, 59, 59, 999);
    }
    else {
      date.setHours(0, 0, 0, 0);
    }
  }
  else {
    if (toEnd) {
      date.setMilliseconds(999);
      date.setSeconds(59);
      const minutes = date.getMinutes();
      // To end of period slot
      const extraMinutes = timeIntervals - (minutes % timeIntervals);
      const setMinutes = minutes + extraMinutes - 1;
      date.setMinutes(setMinutes);
    }
    else {
      date.setMilliseconds(0);
      date.setSeconds(0);
    }
  }
  return convertDateToType(date, dateType);
}

export function startOfTheDay(date) {
  return adjustDateValue(date);
}

export function endOfTheDay(date) {
  return adjustDateValue(date, true);
}


