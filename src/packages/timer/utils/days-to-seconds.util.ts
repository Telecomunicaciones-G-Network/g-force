/**
 * @name daysToSeconds
 *
 * @description Converts days to seconds.
 *
 * @param {number} days - The number of days to convert to seconds.
 *
 * @returns {number} The number of seconds.
 */
export const daysToSeconds = (days: number): number => {
  if (
    typeof days !== 'number' ||
    !Number.isFinite(days) ||
    isNaN(days) ||
    days <= 0
  ) {
    return 0;
  }

  return Math.floor(days * 24 * 60 * 60);
};
