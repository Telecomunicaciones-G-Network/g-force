'use server';

import { revalidateTag } from 'next/cache';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

export async function revalidateChatContactsAction() {
  revalidateTag(CHAT_TAGS.GET_CHAT_CONTACTS, 'max');
}
