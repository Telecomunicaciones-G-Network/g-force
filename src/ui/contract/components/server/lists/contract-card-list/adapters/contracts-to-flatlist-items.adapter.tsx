import type { Contract } from '@module-contract/domain/interfaces';
import type { FlatlistItem } from '@gnetwork-ui/components/organisms/lists/flatlist/interfaces/flatlist-item.interface';

import { ContractCard } from '@ui-contract/components/client/cards/contract-card';

/**
 * @name contractsToFlatlistItemsAdapter
 *
 * @description Adapter to convert contracts to flatlist items.
 *
 * @param {Contract[]} contracts - The contracts to convert.
 * @param {Contract} [selectedContract] - The selected contract.
 * @param {function} [onContractSelect] - Function to call when a contract is selected.
 *
 * @returns {FlatlistItem[]} The flatlist items.
 */
export const contractsToFlatlistItemsAdapter = (
  contracts: Contract[],
  selectedContract?: Contract,
  onContractSelect?: (contract: Contract) => void,
): FlatlistItem[] => {
  if (!contracts || !Array.isArray(contracts) || contracts?.length === 0)
    return [];

  return contracts?.map((contract: Contract) => ({
    id: contract?.number,
    item: (
      <div className="shrink-0 flex-1 min-w-[85%] pr-4 last:pr-0">
        <ContractCard
          contract={contract}
          isActive={selectedContract?.number === contract?.number}
          onClick={() => onContractSelect?.(contract)}
        />
      </div>
    ),
  }));
};
