import type {
  CreateTicketRequest,
  CreateTicketResponse,
  GetTicketByIdRequest,
  GetTicketByIdResponse,
  GetTicketsRequest,
  GetTicketsResponse,
} from '../../domain/interfaces';
import type { TicketRepository } from '../../domain/repositories';

import { createTicketService } from '../services/create-ticket.service';
import { getTicketByIdService } from '../services/get-ticket-by-id.service';
import { getTicketsService } from '../services/get-tickets.service';

export const httpTicketRepository: TicketRepository = {
  createTicket: async (
    request: CreateTicketRequest,
  ): Promise<CreateTicketResponse> => createTicketService(request),
  getTicketById: async (
    request: GetTicketByIdRequest,
  ): Promise<GetTicketByIdResponse> => getTicketByIdService(request),
  getTickets: async (
    request: GetTicketsRequest,
  ): Promise<GetTicketsResponse> => getTicketsService(request),
};
