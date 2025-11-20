// DONE:

import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  GetContactsRequest,
  GetContactsResponse,
} from '../interfaces';

export interface ChatRepository {
  getChatMessages(
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse>;
  getContacts(request?: GetContactsRequest): Promise<GetContactsResponse>;
}
