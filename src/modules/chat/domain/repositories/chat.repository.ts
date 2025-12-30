import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  GetChatTeamsResponse,
  GetChatTransferAgentsRequest,
  GetChatTransferAgentsResponse,
  GetContactContractsRequest,
  GetContactContractsResponse,
  GetContactInformationResponse,
  GetContactInvoicesRequest,
  GetContactInvoicesResponse,
  GetContactNotesRequest,
  GetContactNotesResponse,
  GetContactsRequest,
  GetContactsResponse,
  GetContactTicketsRequest,
  GetContactTicketsResponse,
  UploadChatMediaRequest,
  UploadChatMediaResponse,
} from '../interfaces';

export interface ChatRepository {
  finishChatConversation(contactId: string): Promise<boolean>;
  getChatMediaById(mediaId: string): Promise<string>;
  getChatMessages(
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse>;
  getChatTeams(): Promise<GetChatTeamsResponse>;
  getChatTransferAgents(
    request?: GetChatTransferAgentsRequest,
  ): Promise<GetChatTransferAgentsResponse>;
  getContactContracts(
    request: GetContactContractsRequest,
  ): Promise<GetContactContractsResponse>;
  getContactInformation(
    contactId: string,
  ): Promise<GetContactInformationResponse>;
  getContactInvoices(
    request: GetContactInvoicesRequest,
  ): Promise<GetContactInvoicesResponse>;
  getContactNotes(
    request: GetContactNotesRequest,
  ): Promise<GetContactNotesResponse>;
  getContactTickets(
    request: GetContactTicketsRequest,
  ): Promise<GetContactTicketsResponse>;
  getContacts(request?: GetContactsRequest): Promise<GetContactsResponse>;
  uploadChatMedia(
    request: UploadChatMediaRequest,
  ): Promise<UploadChatMediaResponse>;
}
