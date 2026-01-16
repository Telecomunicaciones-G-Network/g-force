import type { TicketStatusName } from '@module-ticket/domain/types';

export const ticketStatusColorDictionary: Record<TicketStatusName, string> = {
  Abierto: 'text-green-500',
  Cerrado: 'text-red-500',
  'En Progreso': 'text-yellow-500',
};
