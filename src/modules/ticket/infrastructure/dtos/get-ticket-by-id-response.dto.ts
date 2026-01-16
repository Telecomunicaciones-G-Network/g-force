import type { GetTicketsResultDTO } from '../interfaces';

export interface GetTicketByIdResponseDTO {
  result?: GetTicketsResultDTO;
  status: number;
  success: boolean;
}
