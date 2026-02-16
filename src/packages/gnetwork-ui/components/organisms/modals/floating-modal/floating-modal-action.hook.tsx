'use client';

import { useCallback, useState } from 'react';

export const useFloatingModalAction = () => {
  const [isFloatingModalOpen, setIsFloatingModalOpen] =
    useState<boolean>(false);

  const closeFloatingModal = useCallback(
    () => setIsFloatingModalOpen(false),
    [],
  );

  const openFloatingModal = useCallback(() => setIsFloatingModalOpen(true), []);

  return {
    closeFloatingModal,
    isFloatingModalOpen,
    openFloatingModal,
  };
};
