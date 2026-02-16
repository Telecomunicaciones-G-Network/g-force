import type { Message } from '@module-chat/domain/interfaces';

/**
 * @name ChatInternalMessageProps
 *
 * @property {Message} [message] - The message to display.
 */
export interface ChatInternalMessageProps {
  message: Message;
}
