import type { GetFastDebitBanksResponseBank } from '@module-chat/domain/interfaces';
import type { SelectItem } from '@gnetwork-ui/components/molecules/inputs/select-input';

export const getFastDebitBanksToSelectOptions = (
  banks: GetFastDebitBanksResponseBank[],
): SelectItem[] => {
  if (!banks || !Array.isArray(banks)) return [];

  return banks
    ?.sort((a, b) => a.name.localeCompare(b.name))
    .map((bank: GetFastDebitBanksResponseBank) => {
      return {
        label: `(${bank.code}) - ${bank.name}`,
        value: bank.code,
      };
    });
};
