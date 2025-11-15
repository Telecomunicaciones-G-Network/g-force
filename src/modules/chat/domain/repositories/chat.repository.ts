import type { GetContactsResponse } from '../interfaces';

export abstract class ChatRepository {
  abstract getContacts(): Promise<GetContactsResponse>;
}
