import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getTokenAction(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  if (!token) {
    cookieStore.delete('token');
    cookieStore.delete('refresh');
    cookieStore.delete('user');

    redirect('/login');
  }

  return token?.value ?? null;
}
