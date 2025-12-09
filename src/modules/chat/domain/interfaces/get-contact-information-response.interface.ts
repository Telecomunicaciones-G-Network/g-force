import type { ApiResponse } from '@module-core/interfaces';

export interface GetContactInformationResponseData {
  clientType: string;
  email: string;
  name: string;
  phoneNumber: string;
}

export interface GetContactInformationResponse
  extends Pick<ApiResponse, 'status' | 'success'> {
  data: GetContactInformationResponseData;
}
