import type {
  GetAgentsRequest,
  GetAgentsResponse,
} from '../../domain/interfaces';

import { getAgentsUsecase } from '@module-chat/application/usecases/get-agents.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

/**
 * @name GetAgentsQuery
 *
 * @description This query gets the agents.
 *
 * @param {GetAgentsRequest} query - The request object.
 *
 * @returns {Promise<GetAgentsResponse>} The response object.
 */
export const GetAgentsQuery = async (
  query: GetAgentsRequest,
): Promise<GetAgentsResponse> =>
  await getAgentsUsecase(httpChatRepository, query);
