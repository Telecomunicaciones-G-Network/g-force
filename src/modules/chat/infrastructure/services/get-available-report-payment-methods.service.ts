import type { GetAvailableReportPaymentMethodsResponse } from '../../domain/interfaces';
import type { GetAvailableReportPaymentMethodsResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetAvailableReportPaymentMethodsMapper } from '../mappers/get-available-report-payment-methods.mapper';

export const getAvailableReportPaymentMethodsService =
  async (): Promise<GetAvailableReportPaymentMethodsResponse> => {
    const response =
      await gnetworkAxiosApiClient.get<GetAvailableReportPaymentMethodsResponseDTO>(
        CHAT_RESOURCES.GET_AVAILABLE_REPORT_PAYMENT_METHODS,
      );

    if (response?.error || !response?.success || !response?.results) {
      throw new BaseException({
        message:
          response?.error ?? 'Error al obtener los métodos de pago disponibles',
        status: response?.status,
      });
    }

    return GetAvailableReportPaymentMethodsMapper.mapFrom(response);
  };
