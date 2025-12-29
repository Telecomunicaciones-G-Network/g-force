import type { GetChatTeamsResponse, TeamValues } from '../../domain/interfaces';
import type { GetChatTeamsResponseDTO, GetChatTeamsResult } from '../dtos';

export class GetChatTeamsMapper {
  static mapFrom(input: GetChatTeamsResponseDTO): GetChatTeamsResponse {
    return {
      cursor: input?.cursor,
      error: input?.error,
      hasMore: input?.hasMore,
      nextCursor: input?.nextCursor,
      status: input?.status,
      success: input?.success,
      teams: input?.results?.map(GetChatTeamsMapper.mapFromTeamArray) ?? [],
    };
  }

  static mapFromTeamArray(input: GetChatTeamsResult): TeamValues {
    return {
      id: input?.codename,
      name: input?.name,
    };
  }
}
