import type { GetChatTeamsResponse, Team } from '../../domain/interfaces';
import type { GetChatTeamsResponseDTO, GetChatTeamsResult } from '../dtos';

export class GetChatTeamsMapper {
  static mapFrom(input: GetChatTeamsResponseDTO): GetChatTeamsResponse {
    return {
      cursor: input?.cursor,
      error: input?.error,
      hasMore: input?.has_more ?? false,
      nextCursor: input?.next_cursor ?? null,
      status: input?.status,
      success: input?.success,
      teams: input?.results?.map(GetChatTeamsMapper.mapFromTeamArray) ?? [],
    };
  }

  static mapFromTeamArray(input: GetChatTeamsResult): Team {
    return {
      id: input?.codename,
      name: input?.name,
    };
  }
}
