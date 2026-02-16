'use client';

import { useTheme } from 'next-themes';

import { useIsComponentMounted } from '@hook/use-is-component-mounted.hook';
import { useSystemTheme } from '@hook/use-system-theme.hook';

/**
 * @name useLoginBrand
 *
 * @description The hook to use the login brand.
 *
 * @returns isMounted - Whether the component is mounted.
 * @returns theme - The theme of the brand.
 */
export const useLoginBrand = () => {
  const { isMounted } = useIsComponentMounted();
  const { systemTheme } = useSystemTheme();
  const { theme } = useTheme();

  return {
    isMounted,
    theme: isMounted ? (theme === 'system' ? systemTheme : theme) : 'light',
  };
};
