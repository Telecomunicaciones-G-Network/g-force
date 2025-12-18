import type { OnConnectedResponse } from '../../domain/interfaces';
import type { OnConnectedResponseDTO } from '../dtos';

export class OnConnectedMapper {
  static mapFrom(input: OnConnectedResponseDTO): OnConnectedResponse {
    return {
      agent: {
        id: input?.agent_id,
        name: input?.agent_full_name,
      },
      success: input?.success,
    };
  }
}
