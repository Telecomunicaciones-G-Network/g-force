import { MdOutlineReplyAll } from 'react-icons/md';

interface ChatForwardedIndicatorProps {
  forwarded?: boolean;
  forwardedManyTimes?: boolean;
}

export const ChatForwardedIndicator = ({
    forwarded,
    forwardedManyTimes,
}: ChatForwardedIndicatorProps) => {
    if (!forwarded) return null;

    return (
        <div className="flex w-full items-center text-white/40 italic px-1 leading-none">
            <div className="flex items-center">
                <MdOutlineReplyAll className="size-[18px] scale-x-[-1] mr-1" />
                {forwardedManyTimes && (
                    <MdOutlineReplyAll className="size-[18px] -ml-3 scale-x-[-1] mr-1" />
                )}
            </div>

            <span className="text-[13px] tracking-wide font-light">
                {forwardedManyTimes ? 'Reenviado muchas veces' : 'Reenviado'}
            </span>
        </div>
    );
};