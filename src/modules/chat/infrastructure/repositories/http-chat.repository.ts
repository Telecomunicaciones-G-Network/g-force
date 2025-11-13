import type { GetContactsResponse } from '../../domain/interfaces';

import { HttpClient } from '@http-client/classes/http-client.class';

import { ChatRepository } from '../../domain/repositories/chat.repository';

export class HttpChatRepository implements ChatRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async getContacts(): Promise<GetContactsResponse> {
    return await this.httpClient.get<GetContactsResponse>(
      '/chat/chat/contacts/',
    );
  }
}
