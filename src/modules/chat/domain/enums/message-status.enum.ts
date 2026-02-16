/**
 * @enum MessageStatus
 *
 * @description Represents the possible statuses of a message within the system.
 *
 * @property {string} DELIVERED - The message is delivered
 * @property {string} FAILED - The message has failed
 * @property {string} PENDING - The message is pending
 * @property {string} READ - The message has been read
 * @property {string} SENT - The message has been sent
 */
export enum MessageStatus {
  DELIVERED = 'DELIVERED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  READ = 'READ',
  SENT = 'SENT',
}
