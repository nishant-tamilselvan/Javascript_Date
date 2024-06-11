// @flow
/**
 * @name getMonday
 * @category Weekday Helpers
 * @summary Get the first day of the week (Monday) for a given date.
 *
 * @description
 * Returns the first day of the week (Monday) for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on.
 * Gets inferred from passed arguments.
 *
 * @param {string | Date} dateString - The date to get the Monday for.
 *
 * @returns {Date} The Monday of the week.
 *
 * @example
 * // Get the Monday of the week for Jun 11, 2024
 * const result = getMonday(new Date(2024, 5, 11));
 * //=> Mon Jun 10 2024 00:00:00
 */
function getMonday(dateString) {
  const date = new Date(dateString);
  const day = date.getDay() || 7;
  const newDate = new Date(date);
  if (day !== 1) {
    newDate.setHours(-24 * (day - 1));
  }
  return newDate;
}

module.exports = getMonday;
