/**
 * @name CreateTicketModalProps
 *
 * @property {boolean} [isOpen] - Whether the create ticket modal is open.
 * @property {function} [onOpenChange] - Function to open the create ticket modal.
 */
export interface CreateTicketModalProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}
