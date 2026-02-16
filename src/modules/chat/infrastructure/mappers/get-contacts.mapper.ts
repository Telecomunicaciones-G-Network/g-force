import type {
  Contact,
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { GetContactsResult } from '../interfaces';
import type { GetContactsRequestDTO, GetContactsResponseDTO } from '../dtos';

import { DEFAULT_LIMIT_PARAM } from '@http-client/constants/default-limit-param.constant';

import { sanitizeString } from '@stringify/utils/sanitize-string.util';

/**
 * @class GetContactsMapper
 *
 * @description This mapper converts a GetContactsResponseDTO to a GetContactsResponse.
 */
export class GetContactsMapper {
  /**
   * @name mapFrom
   *
   * @description Map the response from the API to the response interface.
   *
   * @param {GetContactsResponseDTO} input - The response from the API.
   *
   * @returns {GetContactsResponse} The response interface.
   */
  public static mapFrom(input: GetContactsResponseDTO): GetContactsResponse {
    return {
      contacts:
        input?.results?.map((item) =>
          GetContactsMapper.mapFromContactArray(item),
        ) ?? [],
      cursor: input?.cursor,
      error: input?.error,
      hasMore: input?.has_more ?? input?.has_more ?? false,
      nextCursor: input?.next_cursor ?? input?.next_cursor ?? null,
      status: input?.status,
      success: input?.success,
    };
  }

  /**
   * @name mapFromContactArray
   *
   * @description Map the result from the API to the contact interface.
   *
   * @param {GetContactsResult} input - The result from the API.
   *
   * @returns {Contact} The contact interface.
   */
  public static mapFromContactArray(input: GetContactsResult): Contact {
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
      platform: input?.platform,
      unreadCount: input?.unread_count,
    };
  }

  /**
   * @name mapTo
   *
   * @description Map the request to the request interface.
   *
   * @param {GetContactsRequest} output - The request.
   *
   * @returns {GetContactsRequestDTO} The request interface.
   */
  public static mapTo(output?: GetContactsRequest): GetContactsRequestDTO {
    return {
      assigned_to: output?.assignedTo,
      cursor: output?.cursor,
      limit: output?.limit ?? DEFAULT_LIMIT_PARAM,
      platform: output?.platform,
      search: output?.search,
      status: output?.status,
      team_codename: output?.teamCodename,
    };
  }
}
