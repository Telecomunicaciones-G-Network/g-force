export interface ClientSearchDropdownProps {
  onClientSelect: (clientId: string, clientName: string) => void;
  selectedClientName?: string;
}
