import type { ChatDetailsTabContentLayoutProps } from '@ui-chat/layouts/chat-details-tab-content-layout';

export interface ChatStatusProps
  extends Pick<ChatDetailsTabContentLayoutProps, 'title'> {
  category?: string;
  contractCondition?: string;
  lastUpdate?: string;
  status?: string;
}
