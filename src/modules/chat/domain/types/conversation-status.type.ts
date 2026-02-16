/**
 * @type ConversationStatus
 *
 * @description This type represents the possible statuses of a conversation within the system.
 *
 * @property {string} ASSIGNED - The conversation is assigned
 * @property {string} FINISHED - The conversation is finished
 * @property {string} WAITING - The conversation is waiting
 */
export type ConversationStatus = 'ASSIGNED' | 'FINISHED' | 'WAITING';
