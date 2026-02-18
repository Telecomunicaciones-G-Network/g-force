/**
 * @name OnChatConversationFinishedResponseFinishedByAgentDTO
 *
 * @description This interface represents the agent information from the on conversation finished response.
 *
 * @property {string} id - The ID of the agent
 * @property {string} full_name - The full name of the agent
 */
export interface OnChatConversationFinishedResponseFinishedByAgentDTO {
  id: string;
  full_name: string;
}

/**
 * @name OnChatConversationFinishedResponseDTO
 *
 * @description This interface represents the response for on conversation finished event.
 *
 * @property {string} contact_id - The ID of the contact
 * @property {string} conversation_id - The ID of the conversation
 * @property {OnConversationFinishedResponseFinishedByAgentDTO} finished_by_agent - The agent information from the on conversation finished socket event
 */
export interface OnChatConversationFinishedResponseDTO {
  contact_id: string;
  conversation_id: string;
  finished_by_agent: OnChatConversationFinishedResponseFinishedByAgentDTO;
}
