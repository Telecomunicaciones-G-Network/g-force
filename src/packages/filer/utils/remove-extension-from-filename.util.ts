/**
 * @name removeExtensionFromFilename
 *
 * @description This utility removes the extension from a given filename.
 *
 * @param {string} filename - The filename to remove the extension from
 *
 * @returns {string} The filename without the extension
 */
export const removeExtensionFromFilename = (filename: string): string => {
  if (!filename || typeof filename !== 'string') return '';

  const fragmentedFilename = filename.split('.');

  if (!fragmentedFilename?.[0]) return '';

  return fragmentedFilename?.[0] ?? '';
};
