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
} from '../interfaces';

export interface ChatRepository {
  finishChatConversation(contactId: string): Promise<boolean>;
  getChatMediaById(mediaId: string): Promise<string>;
  getChatMessages(
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse>;
  getContactInformation(
    contactId: string,
  ): Promise<GetContactInformationResponse>;
  getContactInvoices(
    request: GetContactInvoicesRequest,
  ): Promise<GetContactInvoicesResponse>;
  getContacts(request?: GetContactsRequest): Promise<GetContactsResponse>;
  uploadChatMedia(
    request: UploadChatMediaRequest,
  ): Promise<UploadChatMediaResponse>;
}
