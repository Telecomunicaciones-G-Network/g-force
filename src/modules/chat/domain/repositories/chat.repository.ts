import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  GetContactInvoicesRequest,
  GetContactInvoicesResponse,
  GetContactsRequest,
  GetContactsResponse,
  UploadChatMediaRequest,
  UploadChatMediaResponse,
} from '../interfaces';

export interface ChatRepository {
  finishChatConversation(contactId: string): Promise<boolean>;
  getChatMediaById(mediaId: string): Promise<string>;
  getChatMessages(
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse>;
  getContactInvoices(
    request: GetContactInvoicesRequest,
  ): Promise<GetContactInvoicesResponse>;
  getContacts(request?: GetContactsRequest): Promise<GetContactsResponse>;
  uploadChatMedia(
    request: UploadChatMediaRequest,
  ): Promise<UploadChatMediaResponse>;
}
