import type {
  ContactPlatform,
  ConversationStatus,
  MessageDirection,
  MessageStatus,
  MessageType,
  TeamCodename,
} from '../../domain/types';

export interface GetContactsResultLatestConversationAgent {
  id: string;
  name: string;
}

export interface GetContactsResultLatestConversationTeam {
  codename: TeamCodename;
  name: string;
}

export interface GetContactsResultLatestConversation {
  id: string;
  agent: GetContactsResultLatestConversationAgent | null;
  status: ConversationStatus;
  team: GetContactsResultLatestConversationTeam | null;
}

export interface GetContactsResultLatestMessageSender {
  id: string;
  is_bot: boolean;
  name: string;
}

export interface GetContactsResultLatestMessage {
  id: string;
  created_at: string;
  direction: MessageDirection;
  sender: GetContactsResultLatestMessageSender;
  status: MessageStatus;
  text_preview: string | null;
  type: MessageType;
  updated_at: string | null;
}

export interface GetContactsResult {
  contact_id: string;
  display_name: string;
  latest_conversation: GetContactsResultLatestConversation;
  latest_message: GetContactsResultLatestMessage;
  phone_number: string;
  platform_id: string;
  platform: ContactPlatform;
  unread_count: number;
}
