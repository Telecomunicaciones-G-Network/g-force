import type { TicketFilterOptionValue } from '@ui-ticket/types';

export interface TicketsFilterProps {
  changeFilterStatus?: (status: TicketFilterOptionValue) => void;
  filterStatus: TicketFilterOptionValue;
}
