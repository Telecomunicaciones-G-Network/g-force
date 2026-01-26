import type { TicketStatusCode, TicketStatusName } from '../types';

export interface TicketDetailClient {
  id: number;
  name: string;
  last_name: string;
  identification: string;
  email: string;
  mobile: string;
  contracts: TicketDetailContract[];
}

export interface TicketDetailContract {
  contract_number: number;
  status_name: string;
  status_code: string;
  client_type_code: string;
  client_type_name: string;
  address: string;
}

export interface TicketDetail {
  id: number;
  client: TicketDetailClient;
  assigned_department_id: number;
  assigned_department_name: string;
  created_department_id: number;
  created_department_name: string;
  contract: TicketDetailContract;
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
