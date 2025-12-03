export interface ChatCardProps {
  avatarAlt?: string;
  avatarSrc?: string;
  contactId?: string;
  isActive?: boolean;
  lastMessage?: string;
  lastMessageTime?: string;
  onClick?: VoidFunction;
  unreadMessages?: number;
  username?: string;
}
