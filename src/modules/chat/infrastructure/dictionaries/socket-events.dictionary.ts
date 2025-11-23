export const socketEventsDictionary = {
  INCOMING_MESSAGE: 'incoming_message',
  MESSAGE_STATUS_CHANGED: 'message_status_changed',
} as const satisfies Record<string, string>;
