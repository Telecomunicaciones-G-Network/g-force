import type { ButtonProps } from '@gnetwork-ui/components/molecules/buttons/button';

/**
 * @name ContactsFiltersDropdownTriggerProps
 *
 * @extends {ButtonProps}
 *
 * @property {boolean} isContactsFiltersOpen - Whether the contacts filters dropdown is open.
 */
export interface ContactsFiltersDropdownTriggerProps extends ButtonProps {
  isContactsFiltersOpen?: boolean;
}
