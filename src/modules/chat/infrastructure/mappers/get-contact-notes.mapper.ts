import type {
  GetContactNotesResponse,
  NoteValues,
} from '../../domain/interfaces';
import type { GetContactNotesResult } from '../interfaces';
import type { GetContactNotesResponseDTO } from '../dtos';

export class GetContactNotesMapper {
  static mapFrom(
    response: GetContactNotesResponseDTO,
  ): GetContactNotesResponse {
    return {
      cursor: response?.cursor,
      error: response?.error,
      hasMore: response?.hasMore,
      nextCursor: response?.nextCursor,
      notes:
        response?.results?.map((item) =>
          GetContactNotesMapper.mapFromArray(item),
        ) ?? [],
      status: response?.status,
      success: response?.success,
    };
  }

  static mapFromArray(input: GetContactNotesResult): NoteValues {
    return {
      id: input?.id,
      agentId: input?.agent_id,
      comment: input?.text,
      createdAt: input?.created_at,
      updatedAt: input?.updated_at,
    };
  }
}
