import type {
  GetContactsMappedResponse,
  GetContactsRequest,
} from '../interfaces';

export interface ChatRepository {
  getContacts(request?: GetContactsRequest): Promise<GetContactsMappedResponse>;
}
