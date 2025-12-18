/**
 * Capitalize words utility
 *
 * Capitalizes the first letter of each word in a string
 *
 * @param data - The string to capitalize
 *
 * @returns The string with each word capitalized
 */
export const capitalizeWords = (data?: string): string => {
  if (!data || typeof data !== 'string') return '';

  return data
    .trim()
    .split(' ')
    .map((word: string) => {
      if (word?.length === 0) return word;

      return word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase();
    })
    .join(' ');
};
