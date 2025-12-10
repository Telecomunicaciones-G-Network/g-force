import type { ApiResponse } from '@module-core/interfaces';
import type { NoteValues } from './note-values.interface';

export interface GetContactNotesResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  notes: NoteValues[];
}
