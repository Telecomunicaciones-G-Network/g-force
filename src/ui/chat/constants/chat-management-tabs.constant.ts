import type { TabLine } from '@gnetwork-ui/components/organisms/tabs/tabs-line/interfaces';

/**
 * Chat management tabs constant
 *
 * This constant defines the available tabs for the chat management UI
 */
export const CHAT_MANAGEMENT_TABS: TabLine[] = [
  {
    id: 1,
    label: 'Agentes',
    value: 'agent',
  },
] as const;
