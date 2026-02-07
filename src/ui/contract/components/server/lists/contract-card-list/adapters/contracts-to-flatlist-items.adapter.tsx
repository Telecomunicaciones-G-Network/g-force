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
 *
 * @returns {FlatlistItem[]} The flatlist items.
 */
export const contractsToFlatlistItemsAdapter = (
  contracts: Contract[],
  selectedContract?: Contract,
): FlatlistItem[] => {
  if (!contracts || !Array.isArray(contracts) || contracts?.length === 0)
    return [];

  return contracts?.map((contract: Contract) => ({
    id: contract?.number,
    item: (
      <ContractCard
        contract={contract}
        isActive={selectedContract?.number === contract?.number}
      />
    ),
  }));
};
