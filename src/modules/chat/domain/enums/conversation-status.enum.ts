/**
 * @enum ConversationStatus
 *
 * @description Represents the possible statuses of a conversation within the system.
 *
 * @property {string} ASSIGNED - The conversation is assigned
 * @property {string} FINISHED - The conversation is finished
 * @property {string} WAITING - The conversation is waiting
 */
export enum ConversationStatus {
  ASSIGNED = 'ASSIGNED',
  FINISHED = 'FINISHED',
  WAITING = 'WAITING',
}
