import { XMediaType } from '../types';

export const X_MEDIA_TYPE_HEADER_DICTIONARY: Record<string, XMediaType> = {
  // MIME type → X-Media-Type (used by existing image attach flow)
  'image/jpg': 'IMAGE',
  'image/jpeg': 'IMAGE',
  'image/png': 'IMAGE',
  'image/gif': 'IMAGE',
  'image/webp': 'IMAGE',
  'video/mp4': 'VIDEO',
  'video/webm': 'VIDEO',
  'audio/mpeg': 'AUDIO',
  'audio/ogg': 'AUDIO',
  'audio/wav': 'AUDIO',
  'audio/mp4': 'AUDIO',
  // Direct enum values → pass-through (used by cloud storage upload flow)
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  DOCUMENT: 'DOCUMENT',
  STICKER: 'STICKER',
};
