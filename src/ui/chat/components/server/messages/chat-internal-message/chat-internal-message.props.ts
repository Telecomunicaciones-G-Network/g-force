import type { Message } from '@module-chat/domain/interfaces';

/**
 * Chat internal message props
 *
 * This props represents the props for the chat internal message component.
 *
 * @property message - The message to display.
 */
export interface ChatInternalMessageProps {
  message: Message;
}
