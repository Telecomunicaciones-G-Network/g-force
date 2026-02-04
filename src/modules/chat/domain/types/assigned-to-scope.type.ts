/**
 * @name AssignedToScope
 *
 * @description This type represents the assignment scope for filtering contacts.
 * It determines which conversations are returned based on their assignment.
 *
 * @property my_teams - Conversations assigned to any of the agent's teams (default)
 * @property me - Conversations assigned directly to the authenticated agent
 * @property bot - Conversations assigned to the bot
 */
export type AssignedToScope = 'my_teams' | 'me' | 'bot';
