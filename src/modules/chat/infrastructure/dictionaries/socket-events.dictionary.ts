export const socketEventsDictionary = {
  JOIN_CONTACT_ROOM: 'join_contact_room',
  LEAVE_CONTACT_ROOM: 'leave_contact_room',
} as const satisfies Record<string, string>;
