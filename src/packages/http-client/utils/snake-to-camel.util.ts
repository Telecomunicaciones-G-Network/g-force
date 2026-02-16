export const snakeToCamel = (data: string): string => {
  if (!data || typeof data !== 'string') return '';

  return data.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};
