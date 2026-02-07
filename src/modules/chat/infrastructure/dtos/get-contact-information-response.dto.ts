import type { GetContactInformationResult } from '../interfaces';

export interface GetContactInformationResponseDTO {
  results: GetContactInformationResult;
  status: number;
  success: boolean;
}
