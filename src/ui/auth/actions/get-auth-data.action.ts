'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface GetAuthData {
  token?: string | null;
  user?: string | null;
}

export async function getAuthDataAction(): Promise<GetAuthData | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  const user = cookieStore.get('user');

  if (!token || !user) {
    cookieStore.delete('token');
    cookieStore.delete('refresh');
    cookieStore.delete('user');

    redirect('/login');
  }

  return {
    token: token?.value ?? null,
    user: user?.value ?? null,
  };
}
