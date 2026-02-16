import { MdOutlineSpeakerNotesOff } from 'react-icons/md';

/**
 * @name ChatCloseConversationModalHeader
 *
 * @description Header component for the chat close conversation modal
 */
export const ChatCloseConversationModalHeader = () => (
  <div className="bg-red-100 flex items-center justify-center h-12 mx-auto mb-4 rounded-full w-12">
    <MdOutlineSpeakerNotesOff className=" min-h-6 min-w-6 size-6" />
  </div>
);
