'use server';

import { revalidateTag } from 'next/cache';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

/**
 * Revalidate chat contacts action
 *
 * This action revalidates the chat contacts.
 */
export async function revalidateChatContactsAction() {
  revalidateTag(CHAT_TAGS.GET_CHAT_CONTACTS, 'max');
}
