'use client';

import { useState } from 'react';

/**
 * @name useTicketCardList
 *
 * @description This hook is used to manage the state of the ticket card list.
 *
 * @returns openTicketId - The ID of the currently open ticket modal.
 * @returns setOpenTicketId - Function to set which ticket modal is open.
 */
export const useTicketCardList = () => {
  const [openTicketId, setOpenTicketId] = useState<number | null>(null);

  return {
    openTicketId,
    setOpenTicketId,
  };
};
