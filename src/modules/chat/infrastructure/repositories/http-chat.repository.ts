import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { getChatMessagesService } from '../services/get-chat-messages.service';
import { getContactsService } from '../services/get-contacts.service';

export const httpChatRepository: ChatRepository = {
  getChatMessages: async (
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse> => getChatMessagesService(request),
  getContacts: async (
    request?: GetContactsRequest,
  ): Promise<GetContactsResponse> => getContactsService(request),
};
