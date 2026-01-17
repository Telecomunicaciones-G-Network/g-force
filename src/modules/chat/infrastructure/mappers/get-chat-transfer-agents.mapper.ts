import type {
  Agent,
  GetChatTransferAgentsRequest,
  GetChatTransferAgentsResponse,
} from '../../domain/interfaces';
import type {
  GetChatTransferAgentsRequestDTO,
  GetChatTransferAgentsResponseDTO,
  GetChatTransferAgentsResult,
} from '../dtos';

export class GetChatTransferAgentsMapper {
  static mapFrom(
    input: GetChatTransferAgentsResponseDTO,
  ): GetChatTransferAgentsResponse {
    return {
      agents:
        input?.results?.map(GetChatTransferAgentsMapper.mapFromAgentArray) ??
        [],
      error: input?.error,
      hasMore: input?.hasMore,
      nextCursor: input?.nextCursor,
      status: input?.status,
      success: input?.success,
    };
  }

  static mapFromAgentArray(input: GetChatTransferAgentsResult): Agent {
    return {
      id: input?.id,
      name: input?.full_name,
      teams: input?.teams ?? [],
    };
  }

  static mapTo(
    output?: GetChatTransferAgentsRequest,
  ): GetChatTransferAgentsRequestDTO {
    return {
      is_bot: output?.isBot,
      page_size: output?.limit,
      page: output?.page,
      search: output?.search,
      status: output?.status,
      team_codename: output?.teamCodename,
    };
  }
}
