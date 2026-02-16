import type { TabLineContent } from '@gnetwork-ui/components/organisms/tabs/tabs-line/interfaces';

import { ChatManagementAgentsTable } from '@ui-chat/components/client/tables/chat-management-agents-table';

import { ChatManagementTableContainer } from '@ui-chat/components/server/containers/chat-management-table-container';
import { ChatManagementTeamsTable } from '../components/client/tables/chat-management-teams-table';

/**
 * Chat management tabs content constant
 *
 * This constant defines the content for the chat management tabs
 */
export const chatManagementTabsContent: TabLineContent[] = [
  {
    id: 1,
    children: (
      <ChatManagementTableContainer>
        <ChatManagementAgentsTable />
      </ChatManagementTableContainer>
    ),
    value: 'agent',
  },
  {
    id: 2,
    children: (
      <ChatManagementTableContainer>
        <ChatManagementTeamsTable />
      </ChatManagementTableContainer>
    ),
    value: 'team',
  },
] as const satisfies TabLineContent[];
