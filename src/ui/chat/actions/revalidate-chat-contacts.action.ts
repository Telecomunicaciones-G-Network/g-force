'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateChatContactsAction() {
  revalidateTag('get-chat-contacts', 'max');
}
