'use client';

import type { ReactElement } from 'react';
import { cloneElement } from 'react';

import { cn } from '@gnetwork-ui/utils/cn.util';

interface ChatCloseConversationModalHeaderProps {
  /**
   * Icon to display in the header
   */
  icon: ReactElement;

  /**
   * Background color class for the icon container
   */
  backgroundClass?: string;

  /**
   * Icon color class
   */
  iconColorClass?: string;
}

/**
 * @name ChatCloseConversationModalHeader
 *
 * @description Header component for the chat close conversation modal
 * Displays an icon with customizable styling
 */
export const ChatCloseConversationModalHeader = ({
  backgroundClass = 'bg-red-100',
  icon,
  iconColorClass = 'text-red-600',
}: Readonly<ChatCloseConversationModalHeaderProps>) => {
  // Safely extract existing className from icon props
  const existingClassName =
    icon.props && typeof icon.props === 'object' && 'className' in icon.props
      ? (icon.props.className as string)
      : '';

  return (
    <div
      className={cn(
        'flex items-center justify-center h-12 mx-auto mb-4 rounded-full w-12',
        backgroundClass,
      )}
    >
      {cloneElement(icon, {
        'aria-hidden': true,
        className: cn(
          'min-h-6 min-w-6 size-6',
          iconColorClass,
          existingClassName,
        ),
      } as React.HTMLAttributes<HTMLElement>)}
    </div>
  );
};
