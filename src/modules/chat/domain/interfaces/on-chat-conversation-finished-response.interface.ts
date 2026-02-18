/**
 * @name OnChatConversationFinishedResponse
 *
 * @description This interface represents the values of an on conversation finished response.
 *
 * @property {string} contactId - The ID of the contact.
 * @property {string} conversationId - The ID of the conversation.
 */
export interface OnChatConversationFinishedResponse {
  contactId: string;
  conversationId: string;
}
