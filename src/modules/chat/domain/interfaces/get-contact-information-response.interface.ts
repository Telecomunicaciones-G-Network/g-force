import type { ApiBaseResponse } from '@module-core/interfaces';

export interface GetContactInformationResponseData {
  clientId: number;
  clientType: string;
  email: string;
  fullName: string;
  phoneNumber: string;
}

export interface GetContactInformationResponse
  extends Pick<ApiBaseResponse, 'status' | 'success'> {
  data: GetContactInformationResponseData;
}
