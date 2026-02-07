export interface CreateTicketRequestDTO {
  client_id: number;
  assigned_department_id: number;
  contract_id: number;
  issue_id: number;
  description: string;
}
