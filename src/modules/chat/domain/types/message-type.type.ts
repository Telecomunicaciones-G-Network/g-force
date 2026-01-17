/**
 * Message type type
 *
 * @property {string} AUDIO - The message is an audio
 * @property {string} CONTACTS - The message is a contacts
 * @property {string} CONVERSATION_EVENT - The message is a conversation event
 * @property {string} DOCUMENT - The message is a document
 * @property {string} FLOW_BUTTON - The message is a flow button
 * @property {string} IMAGE - The message is an image
 * @property {string} INTERACTIVE_BUTTON_REPLY - The message is an interactive button reply
 */
export type MessageType =
  | 'AUDIO'
  | 'CONTACTS'
  | 'CONVERSATION_EVENT'
  | 'DOCUMENT'
  | 'FLOW_BUTTON'
  | 'IMAGE'
  | 'INTERACTIVE_BUTTON_REPLY'
  | 'INTERACTIVE_BUTTONS'
  | 'INTERACTIVE_LIST_OPTIONS'
  | 'INTERACTIVE_LIST_SELECTION'
  | 'LOCATION'
  | 'STICKER'
  | 'TEXT'
  | 'VIDEO';
