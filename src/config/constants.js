/** @module config.constants
 *  @description Basic constants
 *  @since 2019.09.10, 14:25
 *  @changed 2020.05.10, 06:13
 */

/** Date conversion & presentation templates... */

// Date/time formats for use in DatePicker, see https://date-fns.org/v2.16.1/docs/format
// export const dateFormat = 'DD.MM.YYYY HH:mm';
// export const timeFormat = 'HH:mm';
export const dateFormat = 'dd.MM.yyyy';
export const timeFormat = 'HH:mm';
export const dateTimeFormat = dateFormat + ' ' + timeFormat;
export const dateRangeDelim = ' – ';

