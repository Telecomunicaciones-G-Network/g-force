import type { TicketDetailDTO } from './ticket-detail.dto';

export interface GetTicketByIdResponseDTO {
  results?: TicketDetailDTO;
  status: number;
  success: boolean;
}
