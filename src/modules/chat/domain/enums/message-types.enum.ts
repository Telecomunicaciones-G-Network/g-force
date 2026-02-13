/**
 * @enum MessageTypes
 *
 * @description Represents the possible types of messages within the system.
 *
 * @property {string} AUDIO - The message is an audio
 * @property {string} CONTACTS - The message is a contacts
 * @property {string} CONVERSATION_EVENT - The message is a conversation event
 * @property {string} DOCUMENT - The message is a document
 * @property {string} FLOW_BUTTON - The message is a flow button
 * @property {string} IMAGE - The message is an image
 * @property {string} INTERACTIVE_BUTTON_REPLY - The message is an interactive button reply
 * @property {string} INTERACTIVE_BUTTONS - The message is an interactive buttons
 * @property {string} INTERACTIVE_LIST_OPTIONS - The message is an interactive list options
 * @property {string} INTERACTIVE_LIST_SELECTION - The message is an interactive list selection
 * @property {string} INTERNAL - The message is an internal message
 * @property {string} LOCATION - The message is a location
 * @property {string} STICKER - The message is a sticker
 * @property {string} TEXT - The message is a text
 * @property {string} VIDEO - The message is a video
 * @property {string} VOICE - The message is a voice
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
