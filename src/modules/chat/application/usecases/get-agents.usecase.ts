import type {
  GetAgentsRequest,
  GetAgentsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetAgentsException } from '../../domain/exceptions/get-agents.exception';

/**
 * @name getAgentsUsecase
 *
 * @description This usecase gets the agents.
 *
 * @param {ChatRepository} chatRepository - The chat repository to interact with.
 * @param {GetAgentsRequest} request - The request object.
 *
 * @returns {Promise<GetAgentsResponse>} The response object.
 *
 * TODO: Filter depending of error obtained using error dictionary o control plane.
 */
export const getAgentsUsecase = async (
  chatRepository: ChatRepository,
  request: GetAgentsRequest,
): Promise<GetAgentsResponse> =>
  await chatRepository
    .getAgents(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetAgentsException({
        status: error?.status,
      });
    });
