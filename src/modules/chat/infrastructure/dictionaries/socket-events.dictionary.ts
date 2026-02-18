/**
 * @name SOCKET_EVENTS_DICTIONARY
 *
 * @description This dictionary contains the names of the socket events.
 *
 * @returns {Record<string, string>} The socket events dictionary
 */
export const socketEventsDictionary = {
  AGENT_STATUS_CHANGED: 'agent_status_changed',
  CHAT_CONVERSATION_ASSIGNMENT_UPDATED: 'chat_conversation_assignment_updated',
  CHAT_CONVERSATION_CREATED: 'chat_conversation_created',
  CHAT_CONVERSATION_FINISHED: 'chat_conversation_finished',
  CHAT_MEDIA_STATUS_CHANGED: 'chat_media_status_changed',
  CHAT_MESSAGE_REACTION_ADDED: 'chat_message_reaction_added',
  CHAT_MESSAGE_REACTION_REMOVED: 'chat_message_reaction_removed',
  CHAT_MESSAGE_RECEIVED: 'chat_message_received',
  CHAT_MESSAGE_SENT: 'chat_message_sent',
  CHAT_MESSAGE_STATUS_CHANGED: 'chat_message_status_changed',
  CONNECTED: 'connected',
  CONTACT_CONVERSATION_ASSIGNMENT_UPDATED:
    'contact_conversation_assignment_updated',
  CONTACT_CONVERSATION_CREATED: 'contact_conversation_created',
  CONTACT_CONVERSATION_FINISHED: 'contact_conversation_finished',
  CONTACT_MESSAGE_RECEIVED: 'contact_message_received',
  CONTACT_MESSAGE_SENT: 'contact_message_sent',
  CONVERSATION_ASSIGNED: 'conversation_assigned',
} as const satisfies Record<string, string>;
