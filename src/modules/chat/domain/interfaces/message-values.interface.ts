import type {
  EventType,
  MessageDirection,
  MessageStatus,
  MessageType,
} from '../types';
import type { Agent } from './agent.interface';
import type { Media } from './media.interface';
import type { Team } from './team.interface';

export interface MessageContactValues {
  birthday: string;
  emails: string[];
  formattedName: string;
  phoneNumbers: string[];
  urls: string[];
}

export interface MessageEventDataValues {
  agent: Omit<Agent, 'teams'>;
  assignedByAgent: Omit<Agent, 'teams'> | null;
  eventType: EventType;
  previousAgent: Omit<Agent, 'teams'> | null;
  previousTeam: Team;
  team: Team;
  timestamp: string;
}

export interface MessageLocationValues {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface MessageReactionValues {
  agentId: string;
  contactId: string;
  emoji: string;
}

export interface MessageSenderValues {
  id: string;
  isBot: boolean;
  name: string;
}

export interface MessageValues {
  id: string;
  contacts: MessageContactValues[];
  conversationId: string;
  createdAt: string;
  deliveredAt: string | null;
  direction: MessageDirection;
  eventData: MessageEventDataValues | null;
  failedAt: string | null;
  forwarded: boolean;
  forwardedManyTimes: boolean;
  location: MessageLocationValues | null;
  media: Media | null;
  reactions: MessageReactionValues[];
  readAt: string | null;
  sender: MessageSenderValues;
  sentAt: string | null;
  status: MessageStatus;
  text: string | null;
  type: MessageType;
  updatedAt: string | null;
}
