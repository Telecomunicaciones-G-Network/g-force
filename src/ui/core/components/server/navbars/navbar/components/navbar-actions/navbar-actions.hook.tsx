'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { useSystemTheme } from '@hook/use-system-theme.hook';

import { useSwitch } from '@gnetwork-ui/components/molecules/switches/switch/switch.hook';

import { logoutAction } from '@ui-auth/actions/logout.action';

export const useNavbarActions = () => {
  const { systemTheme } = useSystemTheme();
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const { changeSwitch, isChecked: isDarkMode } = useSwitch();

  const changeThemeMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const logout = async () => {
    try {
      await logoutAction();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const calculatedDarkMode =
      theme === 'system' && systemTheme === 'dark'
        ? true
        : theme === 'system' && systemTheme === 'light'
          ? false
          : theme === 'dark';

    changeSwitch(calculatedDarkMode);
  }, [changeSwitch, isMounted, systemTheme, theme]);

  return {
    changeThemeMode,
    isDarkMode,
    isMounted,
    logout,
  };
};
