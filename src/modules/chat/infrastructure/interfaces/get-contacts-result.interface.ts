// DONE:

import type {
  ContactPlatform,
  ConversationStatus,
  MessageDirection,
  MessageStatus,
  MessageType,
} from '../../domain/types';

export interface GetContactsResultLatestConversationAgent {
  id: string;
  name: string;
}

export interface GetContactsResultLatestConversationTeam {
  codename: string;
  name: string;
}

export interface GetContactsResultLatestConversation {
  id: string;
  agent: GetContactsResultLatestConversationAgent;
  status: ConversationStatus;
  team: GetContactsResultLatestConversationTeam;
}

export interface GetContactsResultLatestMessageSender {
  id: string;
  name: string;
}

export interface GetContactsResultLatestMessage {
  id: string;
  createdAt: string;
  direction: MessageDirection;
  sender: GetContactsResultLatestMessageSender;
  status: MessageStatus;
  textPreview: string;
  type: MessageType;
}

export interface GetContactsResult {
  contactId: string;
  latestConversation: GetContactsResultLatestConversation;
  latestMessage: GetContactsResultLatestMessage;
  platform: ContactPlatform;
  platformId: string;
}
