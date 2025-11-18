// CHECKED:

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
  agent: GetContactsResultLatestConversationAgent;
  id: string;
  status: ConversationStatus;
  team: GetContactsResultLatestConversationTeam;
}

export interface GetContactsResultLatestMessageSender {
  id: string;
  name: string;
}

export interface GetContactsResultLatestMessage {
  createdAt: string;
  direction: MessageDirection;
  id: string;
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
