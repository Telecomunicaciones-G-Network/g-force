import type { Metadata } from 'next';

import { LoginForm } from '@ui-auth/components/client/forms/login-form';

/**
 * @name metadata
 *
 * @description Metadata for the login page
 */
export const metadata: Metadata = {
  title: 'Gforce Login',
  description: 'Gforce Login',
};

/**
 * @name LoginPage
 *
 * @description Page for the login
 */
export default function LoginPage() {
  return <LoginForm />;
}
