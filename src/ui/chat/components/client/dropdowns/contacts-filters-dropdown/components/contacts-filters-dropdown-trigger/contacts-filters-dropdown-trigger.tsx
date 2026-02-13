'use client';

import type { ContactsFiltersDropdownTriggerProps } from './contacts-filters-dropdown-trigger.props';

import { MdFilterList } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { cn } from '@gnetwork-ui/utils/cn.util';

/**
 * @name ContactsFiltersDropdownTrigger
 *
 * @description This component is used to trigger the contacts filters dropdown.
 *
 * @property {ButtonProps} props - The props for the button.
 */
export const ContactsFiltersDropdownTrigger = ({
  isContactsFiltersOpen = false,
  ...rest
}: Readonly<ContactsFiltersDropdownTriggerProps>) => (
  <Button
    {...rest}
    className={isContactsFiltersOpen ? 'bg-neutral-600' : ''}
    isStatic
    size="icon"
  >
    <MdFilterList
      className={cn(
        'min-h-6 min-w-6 size-6',
        isContactsFiltersOpen && 'fill-chromatic',
      )}
    />
  </Button>
);
