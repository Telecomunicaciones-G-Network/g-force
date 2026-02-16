/**
 * @type MessageStatus
 *
 * @description This type represents the possible statuses of a message within the system.
 *
 * @property {string} DELIVERED - The message is delivered
 * @property {string} FAILED - The message failed
 * @property {string} PENDING - The message is pending
 * @property {string} READ - The message is read
 * @property {string} SENT - The message is sent
 */
export type MessageStatus =
  | 'DELIVERED'
  | 'FAILED'
  | 'PENDING'
  | 'READ'
  | 'SENT';
