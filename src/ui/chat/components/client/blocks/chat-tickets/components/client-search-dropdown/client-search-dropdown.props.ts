import type { ClientContract } from './client-search-dropdown.hook';

export interface ClientSearchDropdownProps {
  onClientSelect: (
    clientId: string,
    clientName: string,
    contracts: ClientContract[],
  ) => void;
  selectedClientName?: string;
}
