// DONE:

import type {
  GetContactsResponse,
  GetContactsResponseContact,
} from '../../domain/interfaces';
import type { GetContactsResult } from '../interfaces';
import type { GetContactsResponseDTO } from '../dtos';

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

  static mapFromContactArray(
    input: GetContactsResult,
  ): GetContactsResponseContact {
    return {
      id: input?.contactId,
      name: input?.latestMessage?.sender?.name,
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
      },
    };
  }
}
