/**
 * Message status enum
 *
 * @property {string} DELIVERED - The message is delivered
 * @property {string} FAILED - The message failed
 * @property {string} PENDING - The message is pending
 * @property {string} READ - The message is read
 * @property {string} SENT - The message is sent
 */
export enum MessageStatus {
  DELIVERED = 'DELIVERED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  READ = 'READ',
  SENT = 'SENT',
}
