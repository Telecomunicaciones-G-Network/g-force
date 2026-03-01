import type { WhatsappTemplate } from '../../domain/interfaces';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

export interface SendWhatsappTemplateRequest {
  /** Full international phone number without + (e.g. "584141234567") */
  phoneNumber: string;
  template: WhatsappTemplate;
  /** Map of {{N}} index → string value filled by the agent */
  paramValues: Record<string, string>;
}

interface TextParameter {
  type: 'text';
  value: string;
}

interface BodyComponent {
  type: 'BODY';
  parameters: TextParameter[];
}

type TemplateComponent = BodyComponent;

interface SendTemplateBody {
  phone_number: string;
  template_name: string;
  template_language: string;
  template_components?: TemplateComponent[];
}

interface SendTemplateResult {
  message_id: string;
  from_phone_id: string;
  to_user: { wa_id: string; name: string };
  status: string | null;
}

interface SendTemplateApiResponse {
  success: boolean;
  status: number;
  results: SendTemplateResult;
}

/**
 * Builds the template_components array for the API request.
 * Only sends a BODY component when the template has {{N}} params.
 */
const buildTemplateComponents = (
  template: WhatsappTemplate,
  paramValues: Record<string, string>,
): TemplateComponent[] | undefined => {
  const bodyComp = template.components.find((c) => c.type === 'BODY');
  if (!bodyComp?.text || typeof bodyComp.text !== 'string') return undefined;

  const matches = bodyComp.text.match(/\{\{(\d+)\}\}/g) ?? [];
  if (matches.length === 0) return undefined;

  const indices = [
    ...new Set(matches.map((m) => parseInt(m.replace(/\{\{|\}\}/g, ''), 10))),
  ].sort((a, b) => a - b);

  const parameters: TextParameter[] = indices.map((idx) => ({
    type: 'text' as const,
    value: paramValues[String(idx)] ?? '',
  }));

  return [{ type: 'BODY', parameters }];
};

/**
 * @name sendWhatsappTemplateService
 *
 * @description Sends a WhatsApp template message to the given phone number.
 * POST /whatsapp/templates/send
 */
export const sendWhatsappTemplateService = async ({
  phoneNumber,
  template,
  paramValues,
}: SendWhatsappTemplateRequest): Promise<SendTemplateResult> => {
  const templateComponents = buildTemplateComponents(template, paramValues);

  const body: SendTemplateBody = {
    phone_number: phoneNumber,
    template_name: template.name,
    template_language: template.language,
    ...(templateComponents ? { template_components: templateComponents } : {}),
  };

  const response = await gnetworkAxiosApiClient.post<
    SendTemplateBody,
    SendTemplateApiResponse
  >(CHAT_RESOURCES.SEND_WHATSAPP_TEMPLATE, body);

  if (!response?.success) {
    throw new BaseException({
      message:
        'Lo sentimos. Ha ocurrido un error al enviar la plantilla de WhatsApp.',
      status: response?.status,
    });
  }

  return response.results;
};
