'use client';

import type { PropsWithChildren } from 'react';
import type { AuthContextValues } from '@ui-auth/contexts/auth-context.props';

import { AuthContext } from '@ui-auth/contexts/auth.context';

export const AuthProvider = ({
  children,
  token = null,
  user = null,
}: Readonly<PropsWithChildren<AuthContextValues>>) => {
  return (
    <AuthContext.Provider value={{ token, user }}>
      {children}
    </AuthContext.Provider>
  );
};
