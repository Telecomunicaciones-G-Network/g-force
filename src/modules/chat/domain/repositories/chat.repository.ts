import type {
  GetAvailableReportPaymentMethodsResponse,
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
  GetFastDebitBanksResponse,
  ProcessFastDebitPaymentRequest,
  ProcessFastDebitPaymentResponse,
  RequestFastDebitOTPRequest,
  RequestFastDebitOTPResponse,
  TransferChatConversationRequest,
  TransferChatConversationResponse,
  UploadChatMediaRequest,
  UploadChatMediaResponse,
} from '../interfaces';

export interface ChatRepository {
  finishChatConversation(contactId: string): Promise<boolean>;
  getAvailableReportPaymentMethods(): Promise<GetAvailableReportPaymentMethodsResponse>;
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
  getFastDebitBanks(): Promise<GetFastDebitBanksResponse>;
  processFastDebitPayment(
    request: ProcessFastDebitPaymentRequest,
  ): Promise<ProcessFastDebitPaymentResponse>;
  requestFastDebitOTP(
    request: RequestFastDebitOTPRequest,
  ): Promise<RequestFastDebitOTPResponse>;
  transferChatConversation(
    request: TransferChatConversationRequest,
  ): Promise<TransferChatConversationResponse>;
  uploadChatMedia(
    request: UploadChatMediaRequest,
  ): Promise<UploadChatMediaResponse>;
}
