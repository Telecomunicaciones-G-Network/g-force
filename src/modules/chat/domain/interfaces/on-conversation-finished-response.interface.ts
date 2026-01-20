/**
 * On conversation finished response interface
 *
 * This interface represents the response from the on conversation finished socket event.
 *
 * @property contactId - The ID of the contact
 * @property conversationId - The ID of the conversation
 */
export interface OnConversationFinishedResponse {
  contactId: string;
  conversationId: string;
}
