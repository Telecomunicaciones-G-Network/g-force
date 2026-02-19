import type { GetDollarRateResponse } from '../../domain/interfaces';
import type { GetDollarRateResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetDollarRateMapper } from '../mappers/get-dollar-rate.mapper';

export const getDollarRateService =
  async (): Promise<GetDollarRateResponse> => {
    const response = await gnetworkAxiosApiClient.get<GetDollarRateResponseDTO>(
      CHAT_RESOURCES.GET_DOLLAR_RATE,
    );

    if (response?.error || !response?.success || !response?.results) {
      throw new BaseException({
        message: response?.error ?? 'Error al obtener la tasa del dolar',
        status: response?.status,
      });
    }

    return GetDollarRateMapper.mapFrom(response);
  };
