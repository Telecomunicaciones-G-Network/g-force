import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  GetContactsRequest,
  GetContactsResponse,
  UploadChatMediaRequest,
  UploadChatMediaResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { getChatMediaByIdService } from '../services/get-chat-media-by-id.service';
import { getChatMessagesService } from '../services/get-chat-messages.service';
import { getContactsService } from '../services/get-contacts.service';
import { uploadChatMediaService } from '../services/upload-chat-media.service';

export const httpChatRepository: ChatRepository = {
  getChatMediaById: async (mediaId: string): Promise<string> =>
    getChatMediaByIdService(mediaId),
  getChatMessages: async (
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse> => getChatMessagesService(request),
  getContacts: async (
    request?: GetContactsRequest,
  ): Promise<GetContactsResponse> => getContactsService(request),
  uploadChatMedia: async (
    request: UploadChatMediaRequest,
  ): Promise<UploadChatMediaResponse> => uploadChatMediaService(request),
};
