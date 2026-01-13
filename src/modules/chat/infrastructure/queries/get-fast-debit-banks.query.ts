import type { GetFastDebitBanksResponse } from '../../domain/interfaces';

import { getFastDebitBanksUsecase } from '../../application/usecases/get-fast-debit-banks.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const GetFastDebitBanksQuery =
  async (): Promise<GetFastDebitBanksResponse> => {
    return await getFastDebitBanksUsecase(httpChatRepository);
  };
