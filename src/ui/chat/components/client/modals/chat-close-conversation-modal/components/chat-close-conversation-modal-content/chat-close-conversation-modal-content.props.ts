/**
 * @name ChatCloseConversationModalContentProps
 *
 * @description Interface to represent the chat close conversation modal content props.
 *
 * @property {boolean} disabled - Whether actions are disabled (e.g., socket disconnected).
 * @property {boolean} isLoading - Whether the primary action is loading.
 * @property {function} onCancel - Callback for cancel action.
 * @property {function} onConfirm - Callback for confirm action.
 */
export interface ChatCloseConversationModalContentProps {
  disabled?: boolean;
  isLoading?: boolean;
  onCancel?: VoidFunction;
  onConfirm?: VoidFunction;
}
