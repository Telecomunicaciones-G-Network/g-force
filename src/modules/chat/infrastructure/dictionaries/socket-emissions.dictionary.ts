export const socketEmissionsDictionary = {
  JOIN_CONTACT_ROOM: 'join_contact_room',
  MARK_MESSAGE_AS_READ: 'mark_message_as_read',
  LEAVE_CONTACT_ROOM: 'leave_contact_room',
} as const satisfies Record<string, string>;
