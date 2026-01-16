import type {
  CreateTicketRequest,
  CreateTicketResponse,
  GetTicketByIdRequest,
  GetTicketByIdResponse,
  GetTicketsRequest,
  GetTicketsResponse,
} from '../interfaces';

export interface TicketRepository {
  createTicket(request: CreateTicketRequest): Promise<CreateTicketResponse>;
  getTicketById(request: GetTicketByIdRequest): Promise<GetTicketByIdResponse>;
  getTickets(request: GetTicketsRequest): Promise<GetTicketsResponse>;
}
