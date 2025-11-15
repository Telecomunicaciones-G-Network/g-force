import type { ChatTicket } from '@ui-chat/interfaces';

export const ChatTickets: ChatTicket[] = [
  {
    id: '1',
    comment: 'Reporte de fallas en la conexión',
    number: '4521',
    solvedDate: '20/07/2025',
    status: 'Resuelto en 24h',
  },
  {
    id: '2',
    comment: 'Solicitud de cambio de módem',
    number: '4489',
    solvedDate: '10/05/2025',
    status: 'Resuelto en 24h',
  },
  {
    id: '3',
    comment: 'Consulta sobre facturación',
    number: '4488',
    status: 'Atendido',
  },
] as const;
