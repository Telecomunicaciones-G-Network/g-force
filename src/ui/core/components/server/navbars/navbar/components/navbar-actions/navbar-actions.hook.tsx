'use client';

import { logoutAction } from '@ui-auth/actions/logout.action';

export const useNavbarActions = () => {
  const logout = async () => {
    try {
      await logoutAction();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return {
    logout,
  };
};
