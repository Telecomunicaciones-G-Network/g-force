export const extractExtensionFromMimeType = (mimeType: string): string => {
  if (!mimeType || typeof mimeType !== 'string') return '';

  return mimeType.split('/')[1] ?? '';
};
