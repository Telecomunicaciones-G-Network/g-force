/**
 * @name MessageStatus
 *
 * @description Represents the possible statuses of a message within the system.
 *
 * @property DELIVERED - The message is delivered
 * @property FAILED - The message has failed
 * @property PENDING - The message is pending
 * @property READ - The message has been read
 * @property SENT - The message has been sent
 */
export enum MessageStatus {
  DELIVERED = 'DELIVERED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  READ = 'READ',
  SENT = 'SENT',
}
