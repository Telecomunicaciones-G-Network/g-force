import type {
  ListSection,
  ListRow,
} from '@module-chat/domain/interfaces/interactive-options.interface';
import { useState } from 'react';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

export interface CollapsibleListSectionsProps {
  sections: ListSection[];
}

export const CollapsibleListSections = ({
  sections,
}: CollapsibleListSectionsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!sections || sections.length === 0) return null;

  const totalRows = sections.reduce(
    (acc, section) => acc + (section.rows?.length || 0),
    0,
  );
  const hasMore = totalRows > 2;

  let rowsCounted = 0;

  return (
    <div className="mt-2 flex flex-col gap-2 w-full">
      {sections.map((section, index) => {
        if (!isExpanded && rowsCounted >= 2) return null;

        const availableSlots = isExpanded
          ? section.rows?.length || 0
          : Math.max(0, 2 - rowsCounted);
        const visibleRows = (section.rows || []).slice(0, availableSlots);

        rowsCounted += section.rows?.length || 0;

        if (visibleRows.length === 0) return null;

        return (
          <div
            key={`${section.title ?? 'section'}-${index}`}
            className="flex flex-col gap-1 w-full"
          >
            {section.title && (
              <span className="text-xs font-semibold text-gray-500 uppercase ml-1">
                {section.title}
              </span>
            )}
            {visibleRows.map((row: ListRow) => (
              <div
                key={row.id}
                className="w-full rounded-lg bg-white border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors"
              >
                {row.title}
              </div>
            ))}
          </div>
        );
      })}

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
              <span>{totalRows - 2}</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};
