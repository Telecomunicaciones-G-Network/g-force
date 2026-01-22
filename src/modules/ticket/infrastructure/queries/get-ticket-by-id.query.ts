import type {
  GetTicketByIdRequest,
  GetTicketByIdResponse,
} from '../../domain/interfaces';

import { getTicketByIdUsecase } from '../../application/usecases/get-ticket-by-id.usecase';

import { httpTicketRepository } from '../repositories/http-ticket.repository';

export const GetTicketByIdQuery = async (
  query: GetTicketByIdRequest,
): Promise<GetTicketByIdResponse> => {
  return await getTicketByIdUsecase(httpTicketRepository, query);
};
