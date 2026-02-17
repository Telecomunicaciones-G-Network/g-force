import type { SelectItem } from '@gnetwork-ui/components/molecules/inputs/select-input';

import { ContactAssignments } from '@module-chat/domain/enums/contact-assignments.enum';

/**
 * @constant CHAT_CONVERSATION_ASSIGNED_TO_SELECT_OPTIONS
 *
 * @description This constant is used to define the options for the conversation assigned to select input.
 */
export const CHAT_CONVERSATION_ASSIGNED_TO_SELECT_OPTIONS: SelectItem[] = [
  {
    label: 'Mis equipos',
    value: ContactAssignments.MY_TEAMS,
  },
  {
    label: 'Mi agente',
    value: ContactAssignments.ME,
  },
  {
    label: 'Bot',
    value: ContactAssignments.BOT,
  },
] as const;
