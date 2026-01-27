export const CHAT_RESOURCES = {
  FINISH_CHAT_CONVERSATION: (contactId: string): string =>
    `/chat/contacts/${contactId}/conversation/finish`,
  GET_AVAILABLE_REPORT_PAYMENT_METHODS: '/chat/payment/available-methods',
  GET_CHAT_MEDIA_BY_ID: (mediaId: string): string => `/chat/media/${mediaId}`,
  GET_CHAT_MESSAGES: (contactId: string): string =>
    `/chat/contacts/${contactId}/messages`,
  GET_CHAT_TEAMS: '/chat/teams',
  GET_CHAT_TRANSFER_AGENTS: '/chat/agents/minimal',
  GET_CONTACT_CONTRACTS: (contactId: string): string =>
    `/chat/contacts/${contactId}/client/contracts`,
  GET_CONTACT_INFORMATION: (contactId: string): string =>
    `/chat/contacts/${contactId}/client/info`,
  GET_CONTACT_INVOICES: (contactId: string): string =>
    `/chat/contacts/${contactId}/client/invoices`,
  GET_CONTACT_TICKETS: (contactId: string): string =>
    `/chat/contacts/${contactId}/client/tickets`,
  GET_CONTACTS: '/chat/contacts',
  GET_FAST_DEBIT_BANKS: '/chat/payment/fast-debit/banks',
  PROCESS_FAST_DEBIT_PAYMENT: '/chat/payment/fast-debit/process-payment',
  REQUEST_FAST_DEBIT_OTP: '/chat/payment/fast-debit/request-otp',
  // Tickets
  SEARCH_CLIENT: '/chat/clients',
  TRANSFER_CHAT_CONVERSATION: (contactId: string): string =>
    `/chat/contacts/${contactId}/conversation/transfer`,
  UPLOAD_CHAT_MEDIA: '/chat/media',
  VALIDATE_MOBILE_PAYMENT: '/chat/payment/validate-pago-movil',
  VALIDATE_MOBILE_PAYMENT_WITH_IMAGE:
    '/chat/payment/validate-pago-movil-with-image',
} as const satisfies Record<string, string | ((...args: string[]) => string)>;
