/**
 * @name minutesToSeconds
 *
 * @description Converts minutes to seconds.
 *
 * @param {number} minutes - The number of minutes to convert to seconds.
 *
 * @returns {number} The number of seconds.
 */
export const minutesToSeconds = (minutes: number): number => {
  if (
    typeof minutes !== 'number' ||
    !Number.isFinite(minutes) ||
    isNaN(minutes) ||
    minutes <= 0
  ) {
    return 0;
  }

  return Math.floor(minutes * 60);
};
