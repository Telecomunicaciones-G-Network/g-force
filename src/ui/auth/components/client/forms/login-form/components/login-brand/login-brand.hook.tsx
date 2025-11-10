import { useTheme } from 'next-themes';

import { useIsComponentMounted } from '@hookers/use-is-component-mounted.hook';
import { useSystemTheme } from '@hookers/use-system-theme.hook';

export const useLoginBrand = () => {
  const { isMounted } = useIsComponentMounted();
  const { systemTheme } = useSystemTheme();
  const { theme } = useTheme();

  return {
    theme: isMounted ? (theme === 'system' ? systemTheme : theme) : 'light',
    isMounted,
  };
};
