// CHECKED:

import type {
  ContactValues,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { GetContactsResponseDTO } from '../dtos';
import type { GetContactsResult } from '../interfaces';

export class GetContactsMapper {
  static mapFrom(input: GetContactsResponseDTO): GetContactsResponse {
    return {
      ...input,
      contacts:
        input?.results?.map((item) =>
          GetContactsMapper.mapFromContactArray(item),
        ) ?? [],
    };
  }

  static mapFromContactArray(input: GetContactsResult): ContactValues {
    return {
      id: input?.contactId,
      name: input?.latestMessage?.sender?.name,
      platform: input?.platform,
      latestConversation: {
        agent: input?.latestConversation?.agent,
        id: input?.latestConversation?.id,
        status: input?.latestConversation?.status,
        team: {
          id: input?.latestConversation?.team?.codename,
          name: input?.latestConversation?.team?.name,
        },
      },
      latestMessage: {
        createdAt: input?.latestMessage?.createdAt,
        direction: input?.latestMessage?.direction,
        id: input?.latestMessage?.id,
        customer: {
          id: input?.latestMessage?.sender?.id,
          name: input?.latestMessage?.sender?.name,
        },
        status: input?.latestMessage?.status,
        message: input?.latestMessage?.textPreview,
        type: input?.latestMessage?.type,
      },
    };
  }
}
