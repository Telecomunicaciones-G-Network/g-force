export const TICKET_RESOURCES = {
  CREATE_TICKET: '/tickets',
  GET_TICKET_BY_ID: (ticketId: string): string => `/tickets/${ticketId}`,
  GET_TICKETS: (contactId: string): string =>
    `/contacts/${contactId}/client/tickets`,
  
  GET_TICKETS_DEPARTMENTS: '/chat/tickets_department',
  GET_TICKETS_ISSUES: '/chat/tickets_issues',
} as const satisfies Record<string, string | ((...args: string[]) => string)>;
