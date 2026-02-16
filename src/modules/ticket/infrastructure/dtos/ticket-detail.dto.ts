import type { TicketStatusCode, TicketStatusName } from '../../domain/types';

export interface TicketDetailClientDTO {
  id: number;
  name: string;
  last_name: string;
  identification: string;
  email: string;
  mobile: string;
  contracts: TicketDetailContractDTO[];
}

export interface TicketDetailContractDTO {
  contract_number: number;
  status_name: string;
  status_code: string;
  client_type_code: string;
  client_type_name: string;
  address: string;
}

export interface TicketDetailDTO {
  id: number;
  client: TicketDetailClientDTO;
  assigned_department_id: number;
  assigned_department_name: string;
  created_department_id: number;
  created_department_name: string;
  contract: TicketDetailContractDTO;
  issue_id: number;
  issue_name: string;
  status_code: TicketStatusCode;
  status_name: TicketStatusName;
  assigned_gsoft_user_id: number | null;
  assigned_gsoft_user_name: string | null;
  closing_reason: string | null;
  visit_date: string | null;
  description: string;
  is_from_portal: boolean;
}
