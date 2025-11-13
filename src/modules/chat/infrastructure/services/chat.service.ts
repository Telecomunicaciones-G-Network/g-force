import type { GetContactsResponseTransformer } from '../interfaces';

import { ChatRepository } from '../../domain/repositories/chat.repository';

import { GetContactsUsecase } from '../../application/get-contacts.usecase';

import { GetContactsMapper } from '../../adapters/mappers/get-contacts.mapper';

export class ChatService {
  constructor(private readonly chatRepository: ChatRepository) {}

  private readonly getContactsUsecase = new GetContactsUsecase(
    this.chatRepository,
  );

  public async getContacts(): Promise<GetContactsResponseTransformer> {
    const response = await this.getContactsUsecase.execute();

    return GetContactsMapper.mapArrayFrom(response);
  }
}
