export const queryKeysDictionary = {
  GET_CHAT_AUDIO_BY_ID: 'get-chat-audio-by-id',
  GET_CHAT_MEDIA_BY_ID: 'get-chat-media-by-id',
  GET_CHAT_MESSAGES: 'get-chat-messages',
  GET_TEAM_SHARED_MEDIA: 'get-team-shared-media',
} as const satisfies Record<string, string>;
