import type { SelectItem } from '@gnetwork-ui/components/molecules/inputs/select-input';

import { TeamCodenames } from '@module-chat/domain/enums/team-codenames.enum';

/**
 * @name CHAT_TEAMS_TO_SELECT_OPTIONS
 *
 * @description This constant is used to define the options for the teams select input.
 *
 * TODO: Label must be obtained from dictionary
 */
export const CHAT_TEAMS_TO_SELECT_OPTIONS: SelectItem[] = [
  {
    label: 'Todos',
    value: 'ALL',
  },
  {
    label: 'Administración',
    value: TeamCodenames.MANAGEMENT,
  },
  {
    label: 'Atención al cliente',
    value: TeamCodenames.CUSTOMER,
  },
  {
    label: 'Fallas y Averías',
    value: TeamCodenames.FAULTS,
  },
  {
    label: 'Soporte',
    value: TeamCodenames.SUPPORT,
  },
  {
    label: 'Ventas',
    value: TeamCodenames.SALES,
  },
] as const;
