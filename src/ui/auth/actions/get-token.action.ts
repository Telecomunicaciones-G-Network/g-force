import { cookies } from 'next/headers';

export async function getTokenAction(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get('token');

    return tokenCookie?.value ?? null;
  } catch (error) {
    console.error('Token can not be obtained :(', error);

    return null;
  }
}
