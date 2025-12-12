import type {
  ContactValues,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { GetContactsResult } from '../interfaces';
import type { GetContactsResponseDTO } from '../dtos';

import { sanitizeString } from '@stringify/utils/sanitize-string.util';

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
      id: input?.contact_id,
      latestConversation: {
        id: input?.latest_conversation?.id,
        agent: input?.latest_conversation?.agent,
        status: input?.latest_conversation?.status,
        team: input?.latest_conversation?.team
          ? {
              id: input?.latest_conversation?.team?.codename,
              name: input?.latest_conversation?.team?.name,
            }
          : null,
      },
      latestMessage: {
        id: input?.latest_message?.id,
        createdAt: input?.latest_message?.created_at,
        direction: input?.latest_message?.direction,
        sender: {
          id: input?.latest_message?.sender?.id,
          isBot: input?.latest_message?.sender?.is_bot ?? false,
          name: input?.latest_message?.sender?.name,
        },
        status: input?.latest_message?.status,
        text: input?.latest_message?.text_preview,
        type: input?.latest_message?.type,
        updatedAt: input?.latest_message?.updated_at,
      },
      name: sanitizeString(input?.display_name?.trim()),
      phoneNumber: input?.phone_number,
      unreadCount: input?.unread_count,
    };
  }
}
