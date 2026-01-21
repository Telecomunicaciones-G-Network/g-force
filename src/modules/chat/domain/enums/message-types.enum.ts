/**
 * Message types enum
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
 * @property VOICE - The message is a voice
 */
export enum MessageTypes {
  AUDIO = 'AUDIO',
  CONTACTS = 'CONTACTS',
  CONVERSATION_EVENT = 'CONVERSATION_EVENT',
  DOCUMENT = 'DOCUMENT',
  FLOW_BUTTON = 'FLOW_BUTTON',
  IMAGE = 'IMAGE',
  INTERACTIVE_BUTTON_REPLY = 'INTERACTIVE_BUTTON_REPLY',
  INTERACTIVE_BUTTONS = 'INTERACTIVE_BUTTONS',
  INTERACTIVE_LIST_OPTIONS = 'INTERACTIVE_LIST_OPTIONS',
  INTERACTIVE_LIST_SELECTION = 'INTERACTIVE_LIST_SELECTION',
  INTERNAL = 'INTERNAL',
  LOCATION = 'LOCATION',
  STICKER = 'STICKER',
  TEXT = 'TEXT',
  VIDEO = 'VIDEO',
}
