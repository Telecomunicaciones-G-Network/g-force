import type { Team } from '@module-chat/domain/interfaces';
import type { MessageType } from '@module-chat/domain/types';

export interface ChatCardProps {
  avatarAlt?: string;
  avatarSrc?: string;
  contactId?: string;
  isActive?: boolean;
  lastMessage?: string;
  lastMessageTime?: string;
  messageType: MessageType;
  onClick?: VoidFunction;
  phoneNumber?: string;
  team?: Team | null;
  unreadMessages?: number;
  username?: string;
}
