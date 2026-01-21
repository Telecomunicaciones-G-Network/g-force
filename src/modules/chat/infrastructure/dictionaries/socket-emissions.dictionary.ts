/**
 * Socket emissions dictionary
 *
 * This dictionary contains the names of the socket emissions.
 */
export const socketEmissionsDictionary = {
  JOIN_CONTACT_ROOM: 'join_contact_room',
  LEAVE_CONTACT_ROOM: 'leave_contact_room',
  MARK_MESSAGE_AS_READ: 'mark_message_as_read',
  SEND_IMAGE_MESSAGE: 'send_image_message',
  SEND_INTERNAL_MESSAGE: 'send_internal_message',
  SEND_TEXT_MESSAGE: 'send_text_message',
} as const satisfies Record<string, string>;
