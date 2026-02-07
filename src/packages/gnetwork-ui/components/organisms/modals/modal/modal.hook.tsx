'use client';

import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onOpenChange = useCallback((open: boolean) => setIsModalOpen(open), []);

  return {
    isModalOpen,
    onOpenChange,
  };
};
