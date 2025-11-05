/**
 * Chat store props.
 *
 * @param activeChat - The active chat.
 * @param setActiveChat - The function to set the active chat.
 */
export interface ChatStore {
  activeChat: number;
  setActiveChat: (chatId: number) => void;
}
