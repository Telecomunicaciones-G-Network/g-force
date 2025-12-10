export const shortString = (
  data: string,
  maxLength: number = 10,
  hideDots?: boolean,
): string => {
  if (!data || typeof data !== 'string') return '';

  if (typeof maxLength !== 'number' || maxLength < 0) return data;

  const ellipsis = '...';
  const ellipsisLength = ellipsis.length;

  if (data.length <= maxLength) return data;

  if (maxLength <= ellipsisLength) return ellipsis;

  return data.slice(0, maxLength - ellipsisLength) + (hideDots ? '' : ellipsis);
};
