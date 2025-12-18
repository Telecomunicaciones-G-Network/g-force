import type { OnConnectedResponse } from '../../domain/interfaces';
import type { OnConnectedResponseDTO } from '../dtos';

export class OnConnectedMapper {
  static mapFrom(input: OnConnectedResponseDTO): OnConnectedResponse {
    return {
      agentId: input?.agent_id,
      success: input?.success,
    };
  }
}
