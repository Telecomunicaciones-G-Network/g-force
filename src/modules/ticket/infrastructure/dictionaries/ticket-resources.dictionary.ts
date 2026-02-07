export const TICKET_RESOURCES = {
  CREATE_TICKET: '/chat/tickets',
  GET_TICKET_BY_ID: (ticketId: string): string => `/chat/tickets/${ticketId}`,
  GET_TICKETS: (contactId: string): string =>
    `/contacts/${contactId}/client/tickets`,

  GET_TICKETS_DEPARTMENTS: '/chat/tickets/departments',
  GET_TICKETS_ISSUES: (departmentId: string): string =>
    `/chat/tickets/issues/${departmentId}`,
} as const satisfies Record<string, string | ((...args: string[]) => string)>;
