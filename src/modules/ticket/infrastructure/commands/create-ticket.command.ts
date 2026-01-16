import type {
  CreateTicketRequest,
  CreateTicketResponse,
} from '../../domain/interfaces';

import { createTicketUsecase } from '../../application/usecases/create-ticket.usecase';

import { httpTicketRepository } from '../repositories/http-ticket.repository';

export const CreateTicketCommand = async (
  command: CreateTicketRequest,
): Promise<CreateTicketResponse> => {
  return await createTicketUsecase(httpTicketRepository, command);
};
