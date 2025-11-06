export interface ChatStoreState {
  activeChat: number;
  setActiveChat: (chatId: number) => void;
}
