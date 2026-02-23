import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';

export interface ChatLocationMessageProps extends ChatMessageProps {
  address?: string;
  latitude: number;
  longitude: number;
  locationName?: string;
}
