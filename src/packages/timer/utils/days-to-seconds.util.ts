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
