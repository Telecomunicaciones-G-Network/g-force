import type { GetFastDebitBanksResponse } from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetFastDebitBanksException } from '../../domain/exceptions/get-fast-debit-banks.exception';

export const getFastDebitBanksUsecase = async (
  chatRepository: ChatRepository,
): Promise<GetFastDebitBanksResponse> => {
  return await chatRepository
    .getFastDebitBanks()
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetFastDebitBanksException({
        status: error?.status,
      });
    });
};
