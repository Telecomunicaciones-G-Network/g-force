import type { EmitChangeAgentStatusRequest } from '@module-chat/domain/interfaces/emit-change-agent-status-request.interface';
import type { EmitChangeAgentStatusResponse } from '@module-chat/domain/interfaces/emit-change-agent-status-response.interface';
import type { EmitChangeAgentStatusRequestDTO } from '@module-chat/infrastructure/dtos/emit-change-agent-status-request.dto';
import type { EmitChangeAgentStatusResponseDTO } from '@module-chat/infrastructure/dtos/emit-change-agent-status-response.dto';

export class EmitChangeAgentStatusMapper {
  static mapTo(
    data: Omit<EmitChangeAgentStatusRequest, 'onSuccess'>,
  ): EmitChangeAgentStatusRequestDTO | null {
    if (!data?.status) return null;

    return {
      status: data.status,
    };
  }

  static mapFrom(
    data: EmitChangeAgentStatusResponseDTO,
  ): EmitChangeAgentStatusResponse | null {
    if (!data) return null;

    return {
      success: data.success,
    };
  }
}
