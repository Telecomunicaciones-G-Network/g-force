import type { ContractCardListProps } from './contract-card-list.props';

import { Flatlist } from '@gnetwork-ui/components/organisms/lists/flatlist';

import { contractsToFlatlistItemsAdapter } from './adapters/contracts-to-flatlist-items.adapter';

/**
 * @name ContractCardList
 *
 * @description Component to display a list of contracts.
 *
 * @property {ContractCardListProps} props - The props for the component.
 */
export const ContractCardList = ({
  contracts,
  selectedContract,
}: Readonly<ContractCardListProps>) => (
  <Flatlist
    items={contractsToFlatlistItemsAdapter(contracts, selectedContract)}
  />
);
