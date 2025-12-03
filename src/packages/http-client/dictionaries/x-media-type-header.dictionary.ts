import { MimeType, XMediaType } from '../types';

export const X_MEDIA_TYPE_HEADER_DICTIONARY: Record<MimeType, XMediaType> = {
  'image/gif': 'IMAGE',
  'image/jpeg': 'IMAGE',
  'image/png': 'IMAGE',
  'image/svg+xml': 'IMAGE',
  'image/webp': 'IMAGE',
};
