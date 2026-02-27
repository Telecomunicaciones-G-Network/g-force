import type {
  GetWhatsappTemplatesRequest,
  GetWhatsappTemplatesResponse,
} from '../../domain/interfaces';

import { getWhatsappTemplatesService } from '../services/get-whatsapp-templates.service';

/**
 * @name GetWhatsappTemplatesQuery
 *
 * @description This query fetches the paginated WhatsApp templates list.
 *
 * @param {GetWhatsappTemplatesRequest} request - Optional filters and pagination params.
 *
 * @returns {Promise<GetWhatsappTemplatesResponse>}
 */
export const GetWhatsappTemplatesQuery = async (
  request: GetWhatsappTemplatesRequest = {},
): Promise<GetWhatsappTemplatesResponse> =>
  await getWhatsappTemplatesService(request);
