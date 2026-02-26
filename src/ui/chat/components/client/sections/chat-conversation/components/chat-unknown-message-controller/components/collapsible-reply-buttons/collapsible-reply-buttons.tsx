import type { ReplyButton } from '@module-chat/domain/interfaces/interactive-options.interface';
import { useState } from 'react';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

export interface CollapsibleReplyButtonsProps {
  buttons: ReplyButton[];
}

export const CollapsibleReplyButtons = ({
  buttons,
}: CollapsibleReplyButtonsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!buttons || buttons.length === 0) return null;

  const hasMore = buttons.length > 2;
  const visibleButtons = isExpanded ? buttons : buttons.slice(0, 2);

  return (
    <div className="mt-2 flex flex-col gap-2 w-full">
      {visibleButtons.map((button) => (
        <div
          key={button.id}
          className="w-full rounded-lg bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors"
        >
          {button.title}
        </div>
      ))}
      {hasMore && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-chromatic-inverted outline-none transition-colors hover:bg-neutral-200"
        >
          {isExpanded ? (
            <MdArrowUpward className="size-4" />
          ) : (
            <>
              <MdArrowDownward className="size-4" />
              <span>{buttons.length - 2}</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};
