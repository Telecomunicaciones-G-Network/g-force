export interface ChatConversationBodyProps {
  disabledChat?: boolean;
  fetchNextMessages?: () => void | Promise<void>;
  isError?: boolean;
  isLoading?: boolean;
  isLoadingMore?: boolean;
  messagesNextPage?: string | null;
}
