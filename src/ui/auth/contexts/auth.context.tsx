// CHECKED:

'use client';

import type { AuthContextValues } from './auth-context.props';

import { createContext } from 'react';

export const AuthContext = createContext<AuthContextValues>({
  token: null,
  user: null,
});
