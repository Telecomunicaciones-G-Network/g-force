import type { OnConnectedResponse } from '../../domain/interfaces';
import type { OnConnectedResponseDTO } from '../dtos';

/**
 * On connected mapper
 *
 * This mapper converts the on connected response DTO to the on connected response domain.
 */
export class OnConnectedMapper {
  /**
   * Map from on connected response DTO to on connected response domain
   *
   * @param input - The on connected response DTO
   * @returns The on connected response domain
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
