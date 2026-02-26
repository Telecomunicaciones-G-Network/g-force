'use server';

import { selfAssignChatConversationCommand } from '@module-chat/infrastructure/commands/self-assign-chat-conversation.command';

export interface CallServerActionResponse<T = unknown> {
  data?: T;
  errors?: string[];
  message?: string;
  success: boolean;
}

export async function selfAssignChatConversationAction(
  contactId?: string,
): Promise<CallServerActionResponse<boolean>> {
  try {
    const result = await selfAssignChatConversationCommand(contactId);

    return {
      data: result,
      message: 'La conversación ha sido auto-asignada correctamente.',
      success: true,
    };
  } catch (err) {
    const error = err as Error;

    return {
      errors: [
        error?.message ||
          'Ha ocurrido un error al auto-asignar la conversación.',
      ],
      message: 'Ha ocurrido un error al auto-asignar la conversación.',
      success: false,
    };
  }
}
