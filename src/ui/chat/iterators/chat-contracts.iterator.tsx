import type { ChatContract } from '@ui-chat/interfaces';

export const ChatContracts: ChatContract[] = [
  {
    id: 1,
    expirationDate: '15/03/2025',
    location: 'Av. Libertador, Res. Miramar, Torre A, Apto 12B, Caracas',
    name: 'Plan Plata',
    napbox: 'NAP-A23',
    number: 'CNT-2025-03458',
    speed: '300 Mbps',
    startDate: '15/03/2025',
    status: 'Activo',
    title: 'Contrato #1',
  },
  {
    id: 2,
    expirationDate: '15/03/2025',
    location: 'Av. Libertador, Res. Miramar, Torre A, Apto 12B, Caracas',
    name: 'Plan Oro',
    napbox: 'NAP-A24',
    number: 'CNT-2025-03459',
    speed: '100 Mbps',
    startDate: '15/03/2025',
    status: 'Activo',
    title: 'Contrato #2',
  },
] as const;
