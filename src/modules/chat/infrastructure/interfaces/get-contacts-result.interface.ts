import type {
  ContactPlatform,
  ConversationStatus,
  MessageDirection,
  MessageStatus,
  MessageType,
  TeamCodename,
} from '../../domain/types';

/**
 * @interface GetContactsResultLatestConversationAgent
 *
 * @description This interface represents the agent of a latest conversation.
 *
 * @property {string} id - The id of the agent.
 * @property {string} name - The name of the agent.
 */
export interface GetContactsResultLatestConversationAgent {
  id: string;
  name: string;
}

/**
 * @interface GetContactsResultLatestConversationTeam
 *
 * @description This interface represents the team of a latest conversation.
 *
 * @property {string} codename - The codename of the team.
 * @property {string} name - The name of the team.
 */
export interface GetContactsResultLatestConversationTeam {
  codename: TeamCodename;
  name: string;
}

/**
 * @interface GetContactsResultLatestConversation
 *
 * @description This interface represents the latest conversation of a contact.
 *
 * @property {string} id - The id of the conversation.
 * @property {GetContactsResultLatestConversationAgent | null} agent - The agent of the conversation.
 * @property {ConversationStatus} status - The status of the conversation.
 * @property {GetContactsResultLatestConversationTeam | null} team - The team of the conversation.
 */
export interface GetContactsResultLatestConversation {
  id: string;
  agent: GetContactsResultLatestConversationAgent | null;
  status: ConversationStatus;
  team: GetContactsResultLatestConversationTeam | null;
}

/**
 * @interface GetContactsResultLatestMessageSender
 *
 * @description This interface represents the sender of a latest message.
 *
 * @property {string} id - The id of the sender.
 * @property {boolean} is_bot - Whether the sender is a bot.
 * @property {string} name - The name of the sender.
 */
export interface GetContactsResultLatestMessageSender {
  id: string;
  is_bot: boolean;
  name: string;
}

/**
 * @interface GetContactsResultLatestMessage
 *
 * @description This interface represents the latest message of a contact.
 *
 * @property {string} id - The id of the message.
 * @property {string} created_at - The creation date of the message.
 * @property {MessageDirection} direction - The direction of the message.
 * @property {GetContactsResultLatestMessageSender} sender - The sender of the message.
 * @property {MessageStatus} status - The status of the message.
 * @property {string | null} text_preview - The preview of the message.
 * @property {MessageType} type - The type of the message.
 * @property {string | null} updated_at - The update date of the message.
 */
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

/**
 * @interface GetContactsResult
 *
 * @description This interface represents the result of a contact.
 *
 * @property {string} contact_id - The id of the contact.
 * @property {string} display_name - The display name of the contact.
 * @property {GetContactsResultLatestConversation} latest_conversation - The latest conversation of the contact.
 * @property {GetContactsResultLatestMessage} latest_message - The latest message of the contact.
 * @property {string} phone_number - The phone number of the contact.
 * @property {string} platform_id - The id of the platform.
 * @property {ContactPlatform} platform - The platform of the contact.
 * @property {number} unread_count - The unread count of the contact.
 */
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
