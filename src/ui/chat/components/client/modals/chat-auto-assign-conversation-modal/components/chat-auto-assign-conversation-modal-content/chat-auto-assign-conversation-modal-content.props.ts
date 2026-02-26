export interface ChatAutoAssignConversationModalContentProps {
  /**
   * Defines whether modal actions are disabled
   * @type {boolean}
   * @default false
   */
  readonly isDisabled?: boolean;

  /**
   * Action trigger state on Modal
   * @type {boolean}
   * @default false
   */
  readonly isLoading?: boolean;

  /**
   * Cancel action
   */
  readonly onCancel?: () => void;

  /**
   * Confirm action
   */
  readonly onConfirm?: () => void;
}
