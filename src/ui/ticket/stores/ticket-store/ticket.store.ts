'use client';

import type { TicketValues } from '@module-ticket/domain/interfaces';
import type { TicketStoreState } from './ticket-store.props';

import { create } from 'zustand';

export const useTicketStore = create<TicketStoreState>((set, get) => ({
  activeTicket: null,
  tickets: [],
  setActiveTicket: (ticket: TicketValues | null) => set({ activeTicket: ticket }),
  setTickets: (tickets: TicketValues[]) => set({ tickets }),
  addTicket: (ticket: TicketValues) => {
    if (!ticket) return;

    const { tickets } = get();
    const ticketExists = tickets.some((t) => t.number === ticket.number);

    if (!ticketExists) {
      set({ tickets: [ticket, ...tickets] });
    }
  },
  updateTicketById: (ticketNumber: number, ticketData: Partial<TicketValues>) => {
    const { tickets } = get();

    set({
      tickets: tickets.map((ticket) =>
        ticket.number === ticketNumber ? { ...ticket, ...ticketData } : ticket,
      ),
    });
  },
  clearTickets: () => set({ tickets: [], activeTicket: null }),
}));
