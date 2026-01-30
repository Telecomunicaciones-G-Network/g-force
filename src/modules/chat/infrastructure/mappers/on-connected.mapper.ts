import type { OnConnectedResponse } from '../../domain/interfaces';
import type { OnConnectedResponseDTO } from '../dtos';

/**
 * @name OnConnectedMapper
 *
 * @description This mapper converts the on connected response DTO to the on connected response domain.
 */
export class OnConnectedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on connected response DTO to the on connected response domain.
   *
   * @param {OnConnectedResponseDTO} input - The on connected response DTO.
   *
   * @returns {OnConnectedResponse} The on connected response domain.
   */
  static mapFrom(input: OnConnectedResponseDTO): OnConnectedResponse {
    return {
      agent: {
        id: input?.agent_id,
        name: input?.agent_full_name,
        teams: input?.agent_teams ?? [],
      },
      success: input?.success,
    };
  }
}
