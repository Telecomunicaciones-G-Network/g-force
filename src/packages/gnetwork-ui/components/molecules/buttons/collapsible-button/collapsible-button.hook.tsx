'use client';

import { useCallback, useState } from 'react';

/**
 * UseCollapsibleButtonProps
 *
 * @property {boolean} [defaultValue] - The default value of the collapsible button.
 */
interface UseCollapsibleButtonProps {
  defaultValue?: boolean;
}

/**
 * useCollapsibleButton
 *
 * This hook is used to manage the state of the collapsible button.
 *
 * @property {UseCollapsibleButtonProps} props - The props for the useCollapsibleButton hook.
 * @property {boolean} [props.defaultValue] - The default value of the collapsible button.
 */
export const useCollapsibleButton = ({
  defaultValue = false,
}: Readonly<UseCollapsibleButtonProps>) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultValue);

  const toggleCollapse = useCallback(
    () => setIsCollapsed((prevValue) => !prevValue),
    [],
  );

  return {
    isCollapsed,
    toggleCollapse,
  };
};
