/**
 * Message type type
 *
 * @property AUDIO - The message is an audio
 * @property CONTACTS - The message is a contacts
 * @property CONVERSATION_EVENT - The message is a conversation event
 * @property DOCUMENT - The message is a document
 * @property FLOW_BUTTON - The message is a flow button
 * @property IMAGE - The message is an image
 * @property INTERACTIVE_BUTTON_REPLY - The message is an interactive button reply
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
