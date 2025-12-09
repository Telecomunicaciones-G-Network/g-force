import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  GetContactInformationResponse,
  GetContactInvoicesRequest,
  GetContactInvoicesResponse,
  GetContactsRequest,
  GetContactsResponse,
  UploadChatMediaRequest,
  UploadChatMediaResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { finishChatConversationService } from '../services/finish-chat-conversation.service';
import { getChatMediaByIdService } from '../services/get-chat-media-by-id.service';
import { getChatMessagesService } from '../services/get-chat-messages.service';
import { getContactInformationService } from '../services/get-contact-information.service';
import { getContactInvoicesService } from '../services/get-contact-invoices.service';
import { getContactsService } from '../services/get-contacts.service';
import { uploadChatMediaService } from '../services/upload-chat-media.service';

export const httpChatRepository: ChatRepository = {
  finishChatConversation: async (contactId: string): Promise<boolean> =>
    finishChatConversationService(contactId),
  getChatMediaById: async (mediaId: string): Promise<string> =>
    getChatMediaByIdService(mediaId),
  getChatMessages: async (
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse> => getChatMessagesService(request),
  getContactInformation: async (
    contactId: string,
  ): Promise<GetContactInformationResponse> =>
    getContactInformationService(contactId),
  getContactInvoices: async (
    request: GetContactInvoicesRequest,
  ): Promise<GetContactInvoicesResponse> => getContactInvoicesService(request),
  getContacts: async (
    request?: GetContactsRequest,
  ): Promise<GetContactsResponse> => getContactsService(request),
  uploadChatMedia: async (
    request: UploadChatMediaRequest,
  ): Promise<UploadChatMediaResponse> => uploadChatMediaService(request),
};
