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
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { finishChatConversationService } from '../services/finish-chat-conversation.service';
import { getAvailableReportPaymentMethodsService } from '../services/get-available-report-payment-methods.service';
import { getChatMediaByIdService } from '../services/get-chat-media-by-id.service';
import { getChatMessagesService } from '../services/get-chat-messages.service';
import { getChatTeamsService } from '../services/get-chat-teams.service';
import { getChatTransferAgentsService } from '../services/get-chat-transfer-agents.service';
import { getContactContractsService } from '../services/get-contact-contracts.service';
import { getContactInformationService } from '../services/get-contact-information.service';
import { getContactInvoicesService } from '../services/get-contact-invoices.service';
import { getContactNotesService } from '../services/get-contact-notes.service';
import { getContactsService } from '../services/get-contacts.service';
import { getContactTicketsService } from '../services/get-contact-tickets.service';
import { getFastDebitBanksService } from '../services/get-fast-debit-banks.service';
import { processFastDebitPaymentService } from '../services/process-fast-debit-payment.service';
import { requestFastDebitOTPService } from '../services/request-fast-debit-otp.service';
import { transferChatConversationService } from '../services/transfer-chat-conversation.service';
import { uploadChatMediaService } from '../services/upload-chat-media.service';

export const httpChatRepository: ChatRepository = {
  finishChatConversation: async (contactId: string): Promise<boolean> =>
    finishChatConversationService(contactId),
  getAvailableReportPaymentMethods:
    async (): Promise<GetAvailableReportPaymentMethodsResponse> =>
      getAvailableReportPaymentMethodsService(),
  getChatMediaById: async (mediaId: string): Promise<string> =>
    getChatMediaByIdService(mediaId),
  getChatMessages: async (
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse> => getChatMessagesService(request),
  getChatTeams: async (): Promise<GetChatTeamsResponse> =>
    getChatTeamsService(),
  getChatTransferAgents: async (
    request?: GetChatTransferAgentsRequest,
  ): Promise<GetChatTransferAgentsResponse> =>
    getChatTransferAgentsService(request),
  getContactContracts: async (
    request: GetContactContractsRequest,
  ): Promise<GetContactContractsResponse> =>
    getContactContractsService(request),
  getContactInformation: async (
    contactId: string,
  ): Promise<GetContactInformationResponse> =>
    getContactInformationService(contactId),
  getContactInvoices: async (
    request: GetContactInvoicesRequest,
  ): Promise<GetContactInvoicesResponse> => getContactInvoicesService(request),
  getContactNotes: async (
    request: GetContactNotesRequest,
  ): Promise<GetContactNotesResponse> => getContactNotesService(request),
  getContactTickets: async (
    request: GetContactTicketsRequest,
  ): Promise<GetContactTicketsResponse> => getContactTicketsService(request),
  getContacts: async (
    request?: GetContactsRequest,
  ): Promise<GetContactsResponse> => getContactsService(request),
  getFastDebitBanks: async (): Promise<GetFastDebitBanksResponse> =>
    getFastDebitBanksService(),
  processFastDebitPayment: async (
    request: ProcessFastDebitPaymentRequest,
  ): Promise<ProcessFastDebitPaymentResponse> =>
    processFastDebitPaymentService(request),
  requestFastDebitOTP: async (
    request: RequestFastDebitOTPRequest,
  ): Promise<RequestFastDebitOTPResponse> =>
    requestFastDebitOTPService(request),
  transferChatConversation: async (
    request: TransferChatConversationRequest,
  ): Promise<TransferChatConversationResponse> =>
    transferChatConversationService(request),
  uploadChatMedia: async (
    request: UploadChatMediaRequest,
  ): Promise<UploadChatMediaResponse> => uploadChatMediaService(request),
};
