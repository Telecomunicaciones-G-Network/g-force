/**
 * @name SOCKET_EMISSIONS_DICTIONARY
 *
 * @description This dictionary contains the names of the socket emissions.
 *
 * @returns {Record<string, string>} The socket emissions dictionary
 */
export const socketEmissionsDictionary = {
  ENTER_CHAT_ROOM: 'enter_chat_room',
  LEAVE_CHAT_ROOM: 'leave_chat_room',
  MARK_MESSAGES_AS_READ: 'mark_messages_as_read',
  SEND_IMAGE_MESSAGE: 'send_image_message',
  SEND_INTERNAL_MESSAGE: 'send_internal_message',
  SEND_TEXT_MESSAGE: 'send_text_message',
  SET_AGENT_STATUS: 'set_agent_status',
} as const satisfies Record<string, string>;
