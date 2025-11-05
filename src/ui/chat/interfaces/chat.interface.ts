/**
 * Chat interface.
 *
 * @param avatarAlt - Alternative text for the user's avatar image.
 * @param avatarSrc - Source URL for the user's avatar image.
 * @param id - Unique identifier for the chat.
 * @param lastMessage - The content of the last message in the chat.
 * @param lastMessageTime - Timestamp or string for when the last message was sent.
 * @param username - The display name of the user.
 */
export interface Chat {
  avatarAlt?: string;
  avatarSrc: string;
  id: number;
  lastMessage: string;
  lastMessageTime: string;
  username: string;
}
