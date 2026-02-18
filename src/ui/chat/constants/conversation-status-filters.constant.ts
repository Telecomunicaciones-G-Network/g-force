import { CONVERSATION_STATUS } from '@ui-chat/constants/conversation-status.constant';

export const CONVERSATION_STATUS_FILTERS = [
  ...CONVERSATION_STATUS,
  'ALL',
] as const;
