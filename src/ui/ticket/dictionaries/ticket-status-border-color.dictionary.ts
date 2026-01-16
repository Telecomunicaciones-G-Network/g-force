import type { TicketStatusName } from '@module-ticket/domain/types';

export const ticketStatusBorderColorDictionary: Record<TicketStatusName, string> = {
  Abierto: 'border-l-4 border-l-green-500',
  Cerrado: 'border-l-4 border-l-red-500',
  'En Progreso': 'border-l-4 border-l-yellow-500',
};
