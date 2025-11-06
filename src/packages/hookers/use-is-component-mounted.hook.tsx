"use client";

import { useEffect, useState } from "react";

/**
 * Use is component mounted props.
 *
 * @param isComponentMounted - Indicates whether the component has been mounted.
 */
export interface UseIsComponentMounted {
  isComponentMounted: boolean;
}

/**
 * Custom hook to check if the component is mounted.
 *
 * @returns {boolean} isComponentMounted - Indicates whether the component has been mounted.
 */
export const useIsComponentMounted = (): UseIsComponentMounted => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    isComponentMounted: isMounted,
  };
};
