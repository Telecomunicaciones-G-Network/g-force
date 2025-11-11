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
