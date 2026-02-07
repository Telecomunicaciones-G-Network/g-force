'use server';

import { finishChatConversationCommand } from '@module-chat/infrastructure/commands/finish-chat-conversation.command';

export interface CallServerActionResponse<T = unknown> {
  data?: T;
  errors?: string[];
  message?: string;
  success: boolean;
}

export async function closeChatConversationAction(
  contactId?: string,
): Promise<CallServerActionResponse<boolean>> {
  try {
    const result = await finishChatConversationCommand(contactId);

    return {
      data: result,
      message: 'La conversación ha sido cerrada correctamente.',
      success: true,
    };
  } catch (err) {
    const error = err as Error;

    return {
      errors: [
        error?.message || 'Ha ocurrido un error al cerrar la conversación.',
      ],
      message: 'Ha ocurrido un error al cerrar la conversación.',
      success: false,
    };
  }
}
