import type {
  ContactValues,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { GetContactsResult } from '../interfaces';
import type { GetContactsResponseDTO } from '../dtos';

export class GetContactsMapper {
  static mapFrom(input: GetContactsResponseDTO): GetContactsResponse {
    return {
      contacts:
        input?.results?.map((item) =>
          GetContactsMapper.mapFromContactArray(item),
        ) ?? [],
      cursor: input?.cursor,
      error: input?.error,
      hasMore: input?.hasMore,
      nextCursor: input?.nextCursor,
      status: input?.status,
      success: input?.success,
    };
  }

  static mapFromContactArray(input: GetContactsResult): ContactValues {
    return {
      id: input?.contactId,
      latestConversation: {
        id: input?.latestConversation?.id,
        agent: input?.latestConversation?.agent,
        status: input?.latestConversation?.status,
        team: input?.latestConversation?.team
          ? {
              id: input?.latestConversation?.team?.codename,
              name: input?.latestConversation?.team?.name,
            }
          : null,
      },
      latestMessage: {
        id: input?.latestMessage?.id,
        createdAt: input?.latestMessage?.createdAt,
        direction: input?.latestMessage?.direction,
        sender: {
          id: input?.latestMessage?.sender?.id,
          name: input?.latestMessage?.sender?.name,
        },
        status: input?.latestMessage?.status,
        text: input?.latestMessage?.textPreview,
        type: input?.latestMessage?.type,
        updatedAt: input?.latestMessage?.updatedAt,
      },
      name: input?.displayName,
      phoneNumber: input?.phoneNumber,
      unreadCount: input?.unread_count,
    };
  }
}
