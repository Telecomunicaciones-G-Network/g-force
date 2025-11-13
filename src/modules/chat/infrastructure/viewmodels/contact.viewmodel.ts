import type { ContactPlatform } from '../../domain/types';

import { Contact } from '../../domain/entities/Contact.entity';
import { Conversation } from '../../domain/entities/Conversation.entity';
import { Message } from '../../domain/entities/Message.entity';

export class ContactViewModel implements Partial<Contact> {
  id?: string;

  latestConversation?: Conversation;

  latestMessage?: Message;

  platform?: ContactPlatform;

  platformId?: string;
}
