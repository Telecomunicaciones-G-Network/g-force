/**
 * @name MessageType
 *
 * @description This type represents the possible types of messages within the system.
 *
 * @property AUDIO - The message is an audio
 * @property CONTACTS - The message is a contacts
 * @property CONVERSATION_EVENT - The message is a conversation event
 * @property DOCUMENT - The message is a document
 * @property FLOW_BUTTON - The message is a flow button
 * @property IMAGE - The message is an image
 * @property INTERACTIVE_BUTTON_REPLY - The message is an interactive button reply
 * @property INTERACTIVE_BUTTONS - The message is an interactive buttons
 * @property INTERACTIVE_LIST_OPTIONS - The message is an interactive list options
 * @property INTERACTIVE_LIST_SELECTION - The message is an interactive list selection
 * @property INTERNAL - The message is an internal message
 * @property LOCATION - The message is a location
 * @property STICKER - The message is a sticker
 * @property TEXT - The message is a text
 * @property VIDEO - The message is a video
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
  | 'INTERNAL'
  | 'LOCATION'
  | 'STICKER'
  | 'TEXT'
  | 'VIDEO';
