export interface CreateTicketRequest {
  contactId: string;
  contractId: number;
  description: string;
  issue: string;
  images?: File[];
}
