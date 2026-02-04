/**
 * @name MessageEventType
 *
 * @description This type represents the possible types of message events within the system.
 *
 * @property CONVERSATION_ASSIGNMENT_UPDATED - The event is a conversation assignment updated
 * @property CONVERSATION_CREATED - The event is a conversation created
 * @property CONVERSATION_FINISHED - The event is a conversation finished
 */
export type MessageEventType =
  | 'conversation_assignment_updated'
  | 'conversation_created'
  | 'conversation_finished';
