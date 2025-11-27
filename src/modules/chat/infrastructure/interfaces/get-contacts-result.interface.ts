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
  team: GetContactsResultLatestConversationTeam | null;
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
  updatedAt: string | null;
}

export interface GetContactsResult {
  contactId: string;
  displayName: string;
  latestConversation: GetContactsResultLatestConversation;
  latestMessage: GetContactsResultLatestMessage;
  phoneNumber: string;
  platform: ContactPlatform;
  platformId: string;
  unread_count: number;
}
