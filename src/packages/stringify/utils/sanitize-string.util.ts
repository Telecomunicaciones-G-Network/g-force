export const sanitizeString = (data: string): string => {
  if (!data || typeof data !== 'string') return '';

  return data?.trim()?.replaceAll('\u3164', '');
};
