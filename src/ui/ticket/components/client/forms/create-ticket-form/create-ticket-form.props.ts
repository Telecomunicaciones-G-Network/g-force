import type { Contract } from '@module-contract/domain/interfaces/contract.interface';

/**
 * @name CreateTicketFormProps
 *
 * @description Interface to represent the create ticket form props.
 *
 * @property {string | null} [filterClientId] - The id of the client.
 * @property {boolean} [isSearchMode] - Whether the search mode is enabled.
 * @property {function} [onSuccess] - Function to close the create ticket modal.
 * @property {Contract} [selectedContract] - The selected contract.
 */
export interface CreateTicketFormProps {
  filterClientId?: string | null;
  isSearchMode?: boolean;
  onSuccess?: () => void;
  selectedContract?: Contract;
}
