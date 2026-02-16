import type { SelectItem } from '@gnetwork-ui/components/molecules/inputs/select-input';

import { ConversationStatus } from '@module-chat/domain/enums/conversation-status.enum';

/**
 * @name CHAT_CONVERSATION_STATUS_SELECT_OPTIONS
 *
 * @description This constant is used to define the options for the conversation status select input.
 *
 * @constant {SelectItem[]} The options for the conversation status select input.
 *
 * TODO: Set ALL value in constant
 */
export const CHAT_CONVERSATION_STATUS_SELECT_OPTIONS: SelectItem[] = [
  {
    label: 'Todos',
    value: 'ALL',
  },
  {
    label: 'Asignada',
    value: ConversationStatus.ASSIGNED,
  },
  {
    label: 'Finalizada',
    value: ConversationStatus.FINISHED,
  },
  {
    label: 'Pendiente',
    value: ConversationStatus.WAITING,
  },
] as const;
