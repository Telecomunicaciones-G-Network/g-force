'use client';

import type { Team } from '@module-chat/domain/interfaces';

import { TableManager } from '@ui-core/components/client/tables/table-manager';

import { teamTableBuilder } from '@ui-chat/builders/teams-table.builder';

import { useChatManagementTeamsTableHook } from './chat-management-teams-table.hook';

/**
 * @name ChatManagementTeamsTable
 *
 * @description Renders the table for managing chat teams using the TableManager component.
 *
 * TODO: When change of page, pagination scroll to the top of table automatically.
 *
 */
export const ChatManagementTeamsTable = () => {
  const configTable = useChatManagementTeamsTableHook();

  return (
    <TableManager<Team>
      builder={teamTableBuilder}
      enableSearch
      title="Equipos de G-Office"
      {...configTable}
    />
  );
};
