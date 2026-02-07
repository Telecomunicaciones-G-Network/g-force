'use client';

import { useDropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown/dropdown.hook';

/**
 * @name useTicketsFilter
 *
 * @description This hook is used to manage the state of the ticket filter dropdown.
 *
 * @returns isFilterOpen - The state of the ticket filter dropdown.
 * @returns setIsFilterOpen - The function to set the state of the ticket filter dropdown.
 */
export const useTicketsFilter = () => {
  const { isOpen, setIsOpen } = useDropdown();

  return {
    isFilterOpen: isOpen,
    setIsFilterOpen: setIsOpen,
  };
};
