export const CHAT_RESOURCES = {
  FINISH_CHAT_CONVERSATION: (contactId: string): string =>
    `/chat/contacts/${contactId}/conversation/finish`,
  GET_CHAT_MEDIA_BY_ID: (mediaId: string): string => `/chat/media/${mediaId}`,
  GET_CHAT_MESSAGES: (contactId: string): string =>
    `/chat/contacts/${contactId}/messages`,
  GET_CONTACT_INFORMATION: (contactId: string): string =>
    `/chat/contacts/${contactId}/client/info`,
  GET_CONTACT_INVOICES: (contactId: string): string =>
    `/chat/contacts/${contactId}/client/invoices`,
  GET_CONTACTS: '/chat/contacts',
  UPLOAD_CHAT_MEDIA: '/chat/media',
} as const satisfies Record<string, string | ((...args: string[]) => string)>;
