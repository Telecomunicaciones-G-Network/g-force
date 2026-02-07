export interface CreateTicketRequest {
  clientId: string;
  assignedDepartmentId: number;
  contractId: number;
  issueId: number;
  description: string;
  images?: File[];
}
