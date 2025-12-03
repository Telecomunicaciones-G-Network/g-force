export const CHAT_RESOURCES = {
  GET_CHAT_MESSAGES: (contactId: string) =>
    `/chat/contacts/${contactId}/messages`,
  GET_CONTACTS: '/chat/contacts',
  UPLOAD_CHAT_MEDIA: '/chat/media',
} as const satisfies Record<string, string | ((...args: string[]) => string)>;
