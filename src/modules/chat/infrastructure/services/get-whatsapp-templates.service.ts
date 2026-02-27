import type {
  GetWhatsappTemplatesRequest,
  GetWhatsappTemplatesResponse,
  TemplateParamFormat,
} from '../../domain/interfaces';
import type { GetWhatsappTemplatesResponseDTO } from '../dtos/get-whatsapp-templates-response.dto';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

/**
 * @name getWhatsappTemplatesService
 *
 * @description This service fetches the paginated list of WhatsApp templates from the API.
 *
 * @param {GetWhatsappTemplatesRequest} request - Optional filters and pagination params.
 *
 * @returns {Promise<GetWhatsappTemplatesResponse>} The paginated template list response.
 */
export const getWhatsappTemplatesService = async (
  request: GetWhatsappTemplatesRequest = {},
): Promise<GetWhatsappTemplatesResponse> => {
  const searchParams: Record<string, string> = {};

  if (request.nameOrContent) {
    searchParams.name_or_content = request.nameOrContent;
  }

  if (request.limit) {
    searchParams.limit = String(request.limit);
  }

  if (request.after) {
    searchParams.after = request.after;
  }

  if (request.before) {
    searchParams.before = request.before;
  }

  const response =
    await gnetworkAxiosApiClient.get<GetWhatsappTemplatesResponseDTO>(
      CHAT_RESOURCES.GET_WHATSAPP_TEMPLATES,
      { searchParams },
    );

  if (!response?.success) {
    throw new BaseException({
      message:
        'Lo sentimos. Ha ocurrido un error al obtener los templates de WhatsApp.',
      status: response?.status,
    });
  }

  return {
    results: response.results.map((item) => ({
      ...item,
      parameter_format: (item.parameter_format as TemplateParamFormat) ?? null,
    })),
    count: response.count,
    next: response.next,
    previous: response.previous,
  };
};
