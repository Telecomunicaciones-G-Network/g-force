// CHECKED:

'use server';

import type { UserValues } from '@module-user/domain/interfaces';

import { cookies } from 'next/headers';

export async function getUserAction(): Promise<UserValues | null> {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get('user');

  if (!userCookie) {
    return null;
  }

  const user = JSON.parse(userCookie.value) as UserValues;

  return user;
}
