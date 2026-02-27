import type { TemplateCategory, TemplateStatus } from '../../domain/interfaces';

export interface GetWhatsappTemplatesResponseDTOComponent {
  type: string;
  format?: string;
  text?: string;
  buttons?: { type: string; text: string; url?: string }[];
  [key: string]: unknown;
}

export interface GetWhatsappTemplatesResponseDTOItem {
  id: string;
  name: string;
  language: string;
  category: TemplateCategory;
  status: TemplateStatus;
  parameter_format?: string | null;
  components: GetWhatsappTemplatesResponseDTOComponent[];
}

export interface GetWhatsappTemplatesResponseDTO {
  success: boolean;
  status: number;
  results: GetWhatsappTemplatesResponseDTOItem[];
  count: number;
  next?: string | null;
  previous?: string | null;
}
