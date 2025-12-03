import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  GetContactsRequest,
  GetContactsResponse,
  UploadChatMediaRequest,
  UploadChatMediaResponse,
} from '../interfaces';

export interface ChatRepository {
  getChatMessages(
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse>;
  getContacts(request?: GetContactsRequest): Promise<GetContactsResponse>;
  uploadChatMedia(
    request: UploadChatMediaRequest,
  ): Promise<UploadChatMediaResponse>;
}
