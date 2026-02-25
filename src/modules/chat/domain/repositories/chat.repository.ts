import type {
  GetAgentsRequest,
  GetAgentsResponse,
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

/**
 * @name ChatRepository
 *
 * @description This repository provides abstract methods for handling chat-related data operations,
 * such as conversations, contacts, media, payments, and tickets. Each method describes a
 * contract for how chat data should be retrieved, manipulated, or sent within the system.
 *
 * @property {(contactId: string) => Promise<boolean>} finishChatConversation - Ends the chat conversation for a contact.
 * @property {(request: GetAgentsRequest) => Promise<GetAgentsResponse>} getAgents - Gets agents based on request criteria.
 * @property {() => Promise<GetAvailableReportPaymentMethodsResponse>} getAvailableReportPaymentMethods - Retrieves available payment methods for reports.
 * @property {(mediaId: string) => Promise<string>} getChatMediaById - Fetches media content by its ID.
 * @property {(request: GetChatMessagesRequest) => Promise<GetChatMessagesResponse>} getChatMessages - Retrieves chat messages based on request criteria.
 * @property {() => Promise<GetChatTeamsResponse>} getChatTeams - Gets chat teams information.
 * @property {(request?: GetChatTransferAgentsRequest) => Promise<GetChatTransferAgentsResponse>} getChatTransferAgents - Gets available transfer agents for chats, optionally filtered with a request.
 * @property {(request: GetContactContractsRequest) => Promise<GetContactContractsResponse>} getContactContracts - Retrieves contracts associated with a contact.
 * @property {(contactId: string) => Promise<GetContactInformationResponse>} getContactInformation - Gets information details on a contact.
 * @property {(request: GetContactInvoicesRequest) => Promise<GetContactInvoicesResponse>} getContactInvoices - Gets invoices for a contact, based on request parameters.
 * @property {(request?: GetContactsRequest) => Promise<GetContactsResponse>} getContacts - Fetches contact list, optionally filtered with a request.
 * @property {(request: GetContactTicketsRequest) => Promise<GetContactTicketsResponse>} getContactTickets - Retrieves tickets associated with a contact.
 * @property {() => Promise<GetFastDebitBanksResponse>} getFastDebitBanks - Lists available banks for fast debit operations.
 * @property {(request: ProcessFastDebitPaymentRequest) => Promise<ProcessFastDebitPaymentResponse>} processFastDebitPayment - Processes a payment via fast debit method.
 * @property {(request: RequestFastDebitOTPRequest) => Promise<RequestFastDebitOTPResponse>} requestFastDebitOTP - Requests a One-Time Password for fast debit.
 * @property {(request: TransferChatConversationRequest) => Promise<TransferChatConversationResponse>} transferChatConversation - Transfers a conversation to another agent or team.
 * @property {(request: UploadChatMediaRequest) => Promise<UploadChatMediaResponse>} uploadChatMedia - Uploads media files for chat purposes.
 */
export interface ChatRepository {
  finishChatConversation(contactId: string): Promise<boolean>;
  getAgents(request: GetAgentsRequest): Promise<GetAgentsResponse>;
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
  getContacts(request?: GetContactsRequest): Promise<GetContactsResponse>;
  getContactTickets(
    request: GetContactTicketsRequest,
  ): Promise<GetContactTicketsResponse>;
  getFastDebitBanks(): Promise<GetFastDebitBanksResponse>;
  processFastDebitPayment(
    request: ProcessFastDebitPaymentRequest,
  ): Promise<ProcessFastDebitPaymentResponse>;
  requestFastDebitOTP(
    request: RequestFastDebitOTPRequest,
  ): Promise<RequestFastDebitOTPResponse>;
  selfAssignChatConversation(contactId: string): Promise<boolean>;
  transferChatConversation(
    request: TransferChatConversationRequest,
  ): Promise<TransferChatConversationResponse>;
  uploadChatMedia(
    request: UploadChatMediaRequest,
  ): Promise<UploadChatMediaResponse>;
}
