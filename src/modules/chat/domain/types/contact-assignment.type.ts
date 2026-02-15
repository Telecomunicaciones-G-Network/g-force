/**
 * @type ContactAssignment
 *
 * @description This type represents the assignment of a contact.
 *
 * @property {string} bot - The contact is assigned to a bot.
 * @property {string} me - The contact is assigned to me.
 * @property {string} my_teams - The contact is assigned to my teams.
 */
export type ContactAssignment = 'bot' | 'me' | 'my_teams';
