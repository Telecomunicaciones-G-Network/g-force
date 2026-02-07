'use client';

import type { GetAgentsResponseAgent } from '@module-chat/domain/interfaces';

import { TableManager } from '@ui-core/components/client/tables/table-manager';

import { agentTableBuilder } from '@ui-chat/builders/agents-table.builder';

import { useChatManagementAgentsTableHook } from './chat-management-agents-table.hook';

/**
 * @name ChatManagementAgentsTable
 *
 * @description Renders the table for managing chat agents using the TableManager component.
 *
 * TODO: When change of page, pagination scroll to the top of table automatically.
 *
 */
export const ChatManagementAgentsTable = () => {
  const configTable = useChatManagementAgentsTableHook();

  return (
    <TableManager<GetAgentsResponseAgent>
      builder={agentTableBuilder}
      enableSearch
      title="Miembros de G-Office"
      {...configTable}
    />
  );
};
