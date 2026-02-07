import type { GetContactInformationResponse } from '../../domain/interfaces';
import type { GetContactInformationResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetContactInformationMapper } from '../mappers/get-contact-information.mapper';

export const getContactInformationService = async (
  contactId: string,
): Promise<GetContactInformationResponse> => {
  const response =
    await gnetworkAxiosApiClient.get<GetContactInformationResponseDTO>(
      CHAT_RESOURCES.GET_CONTACT_INFORMATION(contactId),
    );

  if (!response?.success || !response?.results) {
    throw new BaseException({
      message: `Error al obtener la información del contacto con id: ${contactId}`,
      status: response?.status,
    });
  }

  return GetContactInformationMapper.mapFrom(response);
};
