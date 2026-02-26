import type {
  MessageEventType,
  MediaStorageStatus,
  MediaType,
  MessageDirection,
  MessageStatus,
  MessageType,
  TeamCodename,
} from '../../domain/types';

export interface GetChatMessagesResultContact {
  birthday: string;
  emails: string[];
  formatted_name: string;
  phone_numbers: string[];
  urls: string[];
}

export interface GetChatMessagesResultEventDataAgent {
  id: string;
  full_name: string;
}

export interface GetChatMessagesResultEventDataTeam {
  codename: TeamCodename;
  name: string;
}

export interface GetChatMessagesResultEventData {
  agent: GetChatMessagesResultEventDataAgent | null;
  assigned_by_agent: GetChatMessagesResultEventDataAgent | null;
  event_type: MessageEventType;
  finished_by_agent: GetChatMessagesResultEventDataAgent | null;
  previous_agent: GetChatMessagesResultEventDataAgent | null;
  previous_team: GetChatMessagesResultEventDataTeam;
  team: GetChatMessagesResultEventDataTeam;
  timestamp: string;
}

export interface GetChatMessagesResultLocation {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface GetChatMessagesResultMedia {
  download_url: string;
  filename: string;
  id: string;
  mime_type: string;
  storage_status: MediaStorageStatus;
  type: MediaType;
}

export interface GetChatMessagesResultReaction {
  agent_id: string;
  contact_id: string;
  emoji: string;
}

export interface GetChatMessagesResultSender {
  id: string;
  is_bot: boolean;
  name: string;
}

export interface GetChatMessagesResultFlowData {
  button_text: string | null;
  flow_action_type: string | null;
  flow_codename: string | null;
  flow_token: string | null;
}

export interface GetChatMessagesResultReplyButton {
  id: string;
  title?: string;
  text?: string;
  type: string;
}

export interface GetChatMessagesResultListRow {
  description: string | null;
  id: string;
  title: string;
}

export interface GetChatMessagesResultListSection {
  rows: GetChatMessagesResultListRow[];
  title: string | null;
}

export interface GetChatMessagesResultInteractiveUrlButton {
  title: string;
  url: string;
}

export interface GetChatMessagesResultInteractiveOptions {
  button_text: string | null;
  flow_data: GetChatMessagesResultFlowData | null;
  interactive_type: string;
  list_button_text: string | null;
  list_sections: GetChatMessagesResultListSection[] | null;
  reply_buttons: GetChatMessagesResultReplyButton[] | null;
  template_buttons: GetChatMessagesResultReplyButton[] | null;
  url_button: GetChatMessagesResultInteractiveUrlButton | null;
}

export interface GetChatMessagesResultReplyToMessage {
  id: string;
  direction?: string;
  sender?: GetChatMessagesResultSender;
  status?: string;
  text_preview: string | null;
  type: MessageType;
}

export interface GetChatMessagesResult {
  id: string;
  contacts: GetChatMessagesResultContact[];
  conversation_id: string;
  created_at: string;
  delivered_at: string | null;
  direction: MessageDirection;
  event_data: GetChatMessagesResultEventData;
  extra_metadata: Record<string, unknown> | null;
  failed_at: string | null;
  forwarded_many_times: boolean;
  forwarded: boolean;
  interactive_options: GetChatMessagesResultInteractiveOptions | null;
  location: GetChatMessagesResultLocation | null;
  media: GetChatMessagesResultMedia | null;
  platform_id: string;
  reactions: GetChatMessagesResultReaction[];
  read_at: string | null;
  reply_to_message?: GetChatMessagesResultReplyToMessage | null;
  sender: GetChatMessagesResultSender;
  sent_at: string | null;
  status: MessageStatus;
  text: string | null;
  type: MessageType;
  updated_at: string | null;
}
