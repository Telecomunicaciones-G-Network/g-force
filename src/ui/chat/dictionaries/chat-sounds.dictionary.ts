/**
 * @name CHAT_SOUNDS_DICTIONARY
 *
 * @description This dictionary contains the names of the chat sounds.
 *
 * @returns {Record<string, string>} The chat sounds dictionary
 */
export const chatSoundDictionary = {
  contactAssignment: '/sounds/on-conversations-assigned.mp3',
  whatsappEmitMessage: '/sounds/whatsapp-emit-message.mp3',
  whatsappNotification: '/sounds/whatsapp-notification.mp3',
  whatsappOnMessage: '/sounds/whatsapp-on-message.mp3',
} as const satisfies Record<string, string>;
