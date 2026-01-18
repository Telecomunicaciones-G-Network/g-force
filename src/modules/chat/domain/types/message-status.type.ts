/**
 * Message status type
 *
 * @property DELIVERED - The message is delivered
 * @property FAILED - The message failed
 * @property PENDING - The message is pending
 * @property READ - The message is read
 * @property SENT - The message is sent
 */
export type MessageStatus =
  | 'DELIVERED'
  | 'FAILED'
  | 'PENDING'
  | 'READ'
  | 'SENT';
