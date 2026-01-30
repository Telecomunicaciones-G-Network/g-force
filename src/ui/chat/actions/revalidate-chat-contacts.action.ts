'use server';

import { revalidateTag } from 'next/cache';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

/**
 * @name revalidateChatContactsAction
 *
 * @description This action revalidates the chat contacts.
 *
 * @returns void
 */
export async function revalidateChatContactsAction() {
  revalidateTag(CHAT_TAGS.GET_CHAT_CONTACTS, 'max');
}
