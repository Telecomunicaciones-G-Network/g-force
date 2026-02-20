import { getChatAudioByIdService } from '../services/get-chat-audio-by-id.service';

export const getChatAudioByIdQuery = async (
  mediaId: string,
): Promise<string> => {
  return await getChatAudioByIdService(mediaId);
};
