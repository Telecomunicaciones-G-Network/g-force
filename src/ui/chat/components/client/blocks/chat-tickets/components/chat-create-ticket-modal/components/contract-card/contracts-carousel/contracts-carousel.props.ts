import type { ClientContract } from '../../client-search-dropdown/client-search-dropdown.hook';

export interface ContractsCarouselProps {
  contracts: ClientContract[];
  selectedContractId: number | null;
  onContractSelect: (contractId: number) => void;
}
