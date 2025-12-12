import type { GetContactInformationResponse } from '../../domain/interfaces';
import type { GetContactInformationResponseDTO } from '../dtos';

export class GetContactInformationMapper {
  static mapFrom(
    input: GetContactInformationResponseDTO,
  ): GetContactInformationResponse {
    return {
      data: {
        clientType: input?.results?.client_type,
        email: input?.results?.email,
        fullName: input?.results?.full_name,
        phoneNumber: input?.results?.phone_number,
      },
      status: input?.status,
      success: input?.success,
    };
  }
}
