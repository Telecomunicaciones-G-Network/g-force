/**
 * @name CHAT_TAGS
 *
 * @description This dictionary contains the names of the chat tags.
 *
 * @returns {Record<string, string>} The chat tags dictionary
 */
export const CHAT_TAGS: Record<string, string> = {
  GET_AVAILABLE_REPORT_PAYMENT_METHODS: 'get-available-report-payment-methods',
  GET_CHAT_CONTACT_CONTRACTS: 'get-chat-contact-contracts',
  GET_CHAT_CONTACT_INFORMATION: 'get-chat-contact-information',
  GET_CHAT_CONTACT_INVOICES: 'get-chat-contact-invoices',
  GET_CHAT_CONTACT_TICKETS: 'get-chat-contact-tickets',
  GET_CHAT_CONTACTS: 'get-chat-contacts',
  GET_CHAT_TEAMS: 'get-chat-teams',
  GET_CHAT_TRANSFER_AGENTS: 'get-chat-transfer-agents',
  GET_FAST_DEBIT_BANKS: 'get-fast-debit-banks',
} as const;
