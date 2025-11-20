// PENDING:
// IMPROVE: Aqui debo crear una instancia de la entidad Message y no pasar el objeto directamente

import type {
  MessageSenderValues,
  MessageValues,
} from '../../domain/interfaces';
import type { OnIncommingMessageResponseDTO } from '../../infrastructure/dtos';

import { MessageDirections } from '../../domain/enums/message-directions.enum';
import { MessageStatus } from '../../domain/enums/message-status.enum';

export const GetSocketOnIncommingMessage = (
  response: OnIncommingMessageResponseDTO,
  sender: MessageSenderValues,
): MessageValues => {
  return {
    id: response?.message_id,
    conversationId: response?.conversation_id,
    createdAt: response?.timestamp,
    direction: MessageDirections.INCOMING,
    sender,
    status: MessageStatus.DELIVERED,
    text: response?.text,
    type: response?.type,
  };
};
