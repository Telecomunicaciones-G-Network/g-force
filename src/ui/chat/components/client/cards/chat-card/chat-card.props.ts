/**
 * ChatCard props.
 *
 * @param avatarAlt - Alternative text for the user's avatar image.
 * @param avatarSrc - Source URL for the user's avatar image.
 * @param isActive - Optional flag; if true, the ChatCard is active/selected.
 * @param lastMessage - The content of the last message in the chat.
 * @param lastMessageTime - Timestamp or string for when the last message was sent.
 * @param onClick - The function to call when the ChatCard is clicked.
 * @param username - The display name of the user.
 */
export interface ChatCardProps {
  avatarAlt?: string;
  avatarSrc: string;
  isActive?: boolean;
  lastMessage?: string;
  lastMessageTime?: string;
  onClick?: VoidFunction;
  username: string;
}
