import type { Usecase } from '@module-core/interfaces';
import type { GetContactsResponse } from '../domain/interfaces';

import { ChatRepository } from '../domain/repositories/chat.repository';

export class GetContactsUsecase implements Usecase<void, GetContactsResponse> {
  constructor(private readonly chatRepository: ChatRepository) {}

  async execute(): Promise<GetContactsResponse> {
    return await this.chatRepository.getContacts();
  }
}
