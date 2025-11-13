import type { ChatComment } from '@ui-chat/interfaces';

export const chatComments: ChatComment[] = [
  {
    id: 1,
    comment:
      'Cliente llamó preocupada por corte por factura vencida. Se le explicó procedimiento y quedó conforme.',
    date: '22/06/2025',
    title: 'Agent #01',
  },
  {
    id: 2,
    comment:
      'Solicitó información sobre planes de mayor velocidad, interesada en upgrade en próximo ciclo.',
    date: '18/03/2025',
    title: 'Agent #02',
  },
] as const;
