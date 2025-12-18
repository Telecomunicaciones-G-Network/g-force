export const socketEventsDictionary = {
  CONNECTED: 'connected',
  CONTACT_ASSIGNMENT_UPDATED: 'contact_assignment_updated',
  CONVERSATION_ASSIGNED: 'conversation_assigned',
  CONVERSATION_FINISHED: 'conversation_finished',
  INCOMING_MESSAGE: 'incoming_message',
  MEDIA_STATUS_CHANGED: 'media_status_changed',
  MESSAGE_STATUS_CHANGED: 'message_status_changed',
  NEW_MESSAGE_RECEIVED: 'new_message_received',
} as const satisfies Record<string, string>;
