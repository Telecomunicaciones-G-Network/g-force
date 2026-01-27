/**
 * On conversation finished response finished by agent DTO
 *
 * @property id - The ID of the agent
 * @property full_name - The full name of the agent
 */
export interface OnConversationFinishedResponseFinishedByAgentDTO {
  id: string;
  full_name: string;
}

/**
 * On conversation finished response DTO
 *
 * @property contact_id - The ID of the contact
 * @property conversation_id - The ID of the conversation
 * @property finished_by_agent - The agent information from the on conversation finished socket event
 */
export interface OnConversationFinishedResponseDTO {
  contact_id: string;
  conversation_id: string;
  finished_by_agent: OnConversationFinishedResponseFinishedByAgentDTO;
}
