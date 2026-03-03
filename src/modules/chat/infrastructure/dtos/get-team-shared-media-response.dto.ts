export interface GetTeamSharedMediaResponseDTOItem {
  id: string;
  type: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'STICKER';
  mime_type: string;
  storage_bucket: string | null;
  storage_path: string | null;
  storage_status: 'PENDING' | 'AVAILABLE' | 'FAILED';
}

export interface GetTeamSharedMediaResponseDTO {
  success: boolean;
  status: number;
  error?: string;
  results: GetTeamSharedMediaResponseDTOItem[];
  cursor: string | null;
  next_cursor: string | null;
  has_more: boolean;
}
