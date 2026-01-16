import type { GetTicketsResultDTO } from '../interfaces';

export interface CreateTicketResponseDTO {
  result?: GetTicketsResultDTO;
  status: number;
  success: boolean;
}
