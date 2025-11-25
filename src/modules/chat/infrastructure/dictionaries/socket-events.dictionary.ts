export const socketEventsDictionary = {
  INCOMING_MESSAGE: 'incoming_message',
  MESSAGE_STATUS_CHANGED: 'message_status_changed',
  NEW_MESSAGE_RECEIVED_EVENT: 'new_message_received',
} as const satisfies Record<string, string>;
