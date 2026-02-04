import { ClientContract } from '@ui-chat/components/client/blocks/chat-tickets/components/client-search-dropdown/client-search-dropdown.hook';

/**
 * @name CreateTicketModalContentSearchProps
 *
 * @description Interface to represent the create ticket modal content search props.
 *
 * @property {string | null} [filterClientName] - The name of the client.
 * @property {function} [toggleSearchMode] - Function to toggle the search mode.
 *
 * TODO: Refactor this props to avoid pass ClientContract this use three param beside and object
 */
export interface CreateTicketModalContentSearchProps {
  filterClientName?: string | null;
  onClientSearch: (
    clientId: string,
    clientName: string,
    contracts: ClientContract[],
  ) => void;
  toggleSearchMode?: () => void;
}
