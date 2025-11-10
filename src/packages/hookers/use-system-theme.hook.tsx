'use client';

import { useEffect, useState } from 'react';

export type SystemTheme = 'light' | 'dark';

export interface UseSystemTheme {
  systemTheme: SystemTheme;
}

export const useSystemTheme = (): UseSystemTheme => {
  const [systemTheme, setSystemTheme] = useState<SystemTheme>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    systemTheme,
  };
};
