import type { Metadata } from 'next';

import { LoginForm } from '@ui-auth/components/client/forms/login-form';

export const metadata: Metadata = {
  title: 'Gforce Login',
  description: 'Gforce Login',
};

export default function LoginPage() {
  return <LoginForm />;
}
