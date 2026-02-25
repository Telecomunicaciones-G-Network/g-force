import { MessageReplyToMessage } from '@module-chat/domain/interfaces/message.interface';

interface ChatReplyPreviewProps {
  replyToMessage?: MessageReplyToMessage | null;
}

export const ChatReplyPreview = ({ replyToMessage }: ChatReplyPreviewProps) => {
  if (!replyToMessage) return null;

  return (
    <div className="mb-2 flex flex-col overflow-hidden rounded-md bg-black/5 dark:bg-white/5 border-l-4 border-l-red-500 p-2 text-sm opacity-90 w-full min-w-[200px]">
      <span className="font-semibold text-red-500 dark:text-red-400 truncate text-xs pb-1">
        {replyToMessage.sender?.name || 'Usuario'}
      </span>
      <span className="truncate opacity-80 text-xs ">
        {replyToMessage.textPreview || 'Mensaje adjunto'}
      </span>
    </div>
  );
};
