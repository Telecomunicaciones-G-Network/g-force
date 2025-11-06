"use client";

import { useEffect, useState } from "react";

export interface UseIsComponentMounted {
  isMounted: boolean;
}

export const useIsComponentMounted = (): UseIsComponentMounted => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    isMounted,
  };
};
