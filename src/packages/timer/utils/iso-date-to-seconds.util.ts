/**
 * The default number of seconds.
 */
const DEFAULT_SECONDS = 90;

/**
 * Converts an ISO date string to seconds.
 * @param date - The ISO date string to convert.
 * @returns The number of seconds remaining until the date.
 */
export const isoDateToSeconds = (date: string): number => {
  if (!date || typeof date !== 'string') return 0;

  const currentDate = new Date();
  const expirationDate = new Date(date);
  const secondsRemaining = Math.floor(
    (expirationDate.getTime() - currentDate.getTime()) / 1000,
  );

  return secondsRemaining > 0 ? secondsRemaining + 2 : DEFAULT_SECONDS;
};
