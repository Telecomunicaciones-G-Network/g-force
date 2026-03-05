export interface SharedMediaItem {
  id: string;
  type: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'STICKER';
  mimeType: string;
  storageBucket: string | null;
  storagePath: string | null;
  storageStatus: 'PENDING' | 'AVAILABLE' | 'FAILED';
}

export interface GetTeamSharedMediaResponse {
  error?: string;
  hasMore: boolean;
  nextCursor: string | null;
  results: SharedMediaItem[];
  status: number;
  success: boolean;
}
