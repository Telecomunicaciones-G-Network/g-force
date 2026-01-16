import type {
  GetTicketsRequest,
  GetTicketsResponse,
} from '../../domain/interfaces';

import { getTicketsUsecase } from '../../application/usecases/get-tickets.usecase';

import { httpTicketRepository } from '../repositories/http-ticket.repository';

export const GetTicketsQuery = async (
  query: GetTicketsRequest,
): Promise<GetTicketsResponse> => {
  return await getTicketsUsecase(httpTicketRepository, query);
};
