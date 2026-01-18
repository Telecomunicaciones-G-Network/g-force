/**
 * On contact finished response interface
 *
 * This interface represents the response from the on contact finished socket event.
 *
 * @param contactId - The ID of the contact
 * @param conversationId - The ID of the conversation
 */
export interface OnContactFinishedResponse {
  contactId: string;
  conversationId: string;
}
