import type { TicketValues } from '@module-ticket/domain/interfaces';

export interface TicketStoreState {
  activeTicket: TicketValues | null;
  tickets: TicketValues[];
  setActiveTicket: (ticket: TicketValues | null) => void;
  setTickets: (tickets: TicketValues[]) => void;
  addTicket: (ticket: TicketValues) => void;
  updateTicketById: (ticketNumber: number, ticket: Partial<TicketValues>) => void;
  clearTickets: () => void;
}
