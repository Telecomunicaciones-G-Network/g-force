import type { GetFastDebitBanksResponse } from '../../domain/interfaces';
import type { GetFastDebitBanksResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetFastDebitBanksMapper } from '../mappers/get-fast-debit-banks.mapper';

export const getFastDebitBanksService =
  async (): Promise<GetFastDebitBanksResponse> => {
    const response =
      await gnetworkAxiosApiClient.get<GetFastDebitBanksResponseDTO>(
        CHAT_RESOURCES.GET_FAST_DEBIT_BANKS,
      );

    if (response?.error || !response?.success || !response?.results) {
      throw new BaseException({
        message: response?.error ?? 'Error al obtener los bancos disponibles',
        status: response?.status,
      });
    }

    return GetFastDebitBanksMapper.mapFrom(response);
  };
