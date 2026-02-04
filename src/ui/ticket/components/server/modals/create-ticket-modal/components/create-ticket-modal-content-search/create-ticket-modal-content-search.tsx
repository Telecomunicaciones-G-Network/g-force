'use client';

import type { CreateTicketModalContentSearchProps } from './create-ticket-modal-content-search.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ClientSearchDropdown } from '@ui-chat/components/client/blocks/chat-tickets/components/client-search-dropdown';

import styles from './create-ticket-modal-content-search.module.css';

/**
 * @name CreateTicketModalContentSearch
 *
 * @description Component to display the create ticket modal content search.
 *
 * @property {string | null} [filterClientName] - The name of the client.
 * @property {function} [onClientSearch] - Function to handle the client search.
 * @property {function} [toggleSearchMode] - Function to toggle the search mode.
 *
 * TODO: I must to refactor ClientSearchDropdown
 * TODO: Use Button beside button
 */
export const CreateTicketModalContentSearch = ({
  filterClientName,
  onClientSearch,
  toggleSearchMode,
}: Readonly<CreateTicketModalContentSearchProps>) => (
  <div
    className={cn(styles.base, filterClientName ? 'min-h-0' : 'min-h-[200px]')}
  >
    <div className={styles.base__header}>
      <Text as="span" className="text-neutral-600" level="small" scheme="label">
        Buscando cliente alternativo
      </Text>
      <Button
        className="text-sm text-primary-500 hover:text-primary-600 font-medium cursor-pointer border border-neutral-300 rounded-lg px-2 py-1 hover:bg-neutral-100"
        onClick={toggleSearchMode}
        type="button"
      >
        Cancelar búsqueda
      </Button>
    </div>
    <div>
      <ClientSearchDropdown
        onClientSelect={onClientSearch}
        selectedClientName={filterClientName ?? ''}
      />
    </div>
  </div>
);
