import type {
  GetContactInvoicesRequest,
  GetContactInvoicesResponse,
} from '../../domain/interfaces';
import type { GetContactInvoicesResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetContactInvoicesMapper } from '../mappers/get-contact-invoices.mapper';

export const getContactInvoicesService = async (
  request: GetContactInvoicesRequest,
): Promise<GetContactInvoicesResponse> => {
  const response =
    await gnetworkAxiosApiClient.get<GetContactInvoicesResponseDTO>(
      CHAT_RESOURCES.GET_CONTACT_INVOICES(request?.contactId),
      {
        searchParams: {
          limit: request?.limit?.toString() ?? '20',
          page: request?.page?.toString() ?? '1',
        },
      },
    );

  if (response?.error || !response?.results) {
    throw new BaseException({
      message:
        response?.error ??
        `Error al obtener las facturas del contacto con id: ${request?.contactId}`,
      status: response?.status,
    });
  }

  return GetContactInvoicesMapper.mapFrom(response);
};
