export interface ChatCardProps {
  avatarAlt?: string;
  avatarSrc: string;
  isActive?: boolean;
  lastMessage?: string;
  lastMessageTime?: string;
  onClick?: VoidFunction;
  username: string;
}
