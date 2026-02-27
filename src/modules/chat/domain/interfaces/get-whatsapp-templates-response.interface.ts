export type TemplateStatus =
  | 'APPROVED'
  | 'DISABLED'
  | 'IN_APPEAL'
  | 'PENDING'
  | 'REINSTATED'
  | 'REJECTED'
  | 'DELETED'
  | 'PENDING_DELETION'
  | 'FLAGGED'
  | 'PAUSED'
  | 'LIMIT_EXCEEDED'
  | 'ARCHIVED'
  | 'LOCKED'
  | 'UNKNOWN';

export type TemplateCategory =
  | 'AUTHENTICATION'
  | 'MARKETING'
  | 'UTILITY'
  | 'UNKNOWN';

export type TemplateParamFormat = 'POSITIONAL' | 'NAMED' | 'UNKNOWN';

export interface WhatsappTemplateComponent {
  type: string;
  format?: string;
  text?: string;
  buttons?: { type: string; text: string; url?: string }[];
  [key: string]: unknown;
}

export interface WhatsappTemplate {
  id: string;
  name: string;
  language: string;
  category: TemplateCategory;
  status: TemplateStatus;
  parameter_format?: TemplateParamFormat | null;
  components: WhatsappTemplateComponent[];
}

export interface GetWhatsappTemplatesResponse {
  results: WhatsappTemplate[];
  count: number;
  next?: string | null;
  previous?: string | null;
}
