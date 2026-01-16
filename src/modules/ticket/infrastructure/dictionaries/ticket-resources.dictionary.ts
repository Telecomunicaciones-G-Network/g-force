export const TICKET_RESOURCES = {
  CREATE_TICKET: '/tickets',
  GET_TICKET_BY_ID: (ticketId: string): string => `/tickets/${ticketId}`,

  //UNICO FUNCIONANDO ENDPOINT CORRECTO
  GET_TICKETS: (contactId: string): string =>
    `/contacts/${contactId}/client/tickets`,
} as const satisfies Record<string, string | ((...args: string[]) => string)>;
