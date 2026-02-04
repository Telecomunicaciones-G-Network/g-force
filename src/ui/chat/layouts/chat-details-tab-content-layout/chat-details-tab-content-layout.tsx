'use client';

import type { ChatDetailsTabContentLayoutProps } from './chat-details-tab-content-layout.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { BackButton } from '@gnetwork-ui/components/organisms/buttons/back-button';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useChatDetailsTabContentLayout } from './chat-details-tab-content-layout.hook';

import styles from './chat-details-tab-content-layout.module.css';

/**
 * @name ChatDetailsTabContentLayout
 *
 * @description Layout for the chat details tab content.
 *
 * @property {ReactChild} [actionComponent] - The action component to render (e.g., a button).
 * @property {string} [title] - The title to display in the layout header.
 * @property {ReactNode} children - The children to render in the layout.
 */
export const ChatDetailsTabContentLayout = ({
  actionComponent,
  children,
  title = '',
}: Readonly<ChatDetailsTabContentLayoutProps>) => {
  const { goBackChat, isDesktop } = useChatDetailsTabContentLayout();

  return (
    <section
      className={cn(styles.base, 'py-6 px-4 tablet:p-8 lg:py-6 lg:px-8')}
    >
      <div
        className={cn(
          styles.base__container,
          'flex',
          actionComponent
            ? 'justify-end lg:justify-between'
            : 'hidden lg:justify-start',
        )}
      >
        <div className={cn(styles.base__title, 'hidden lg:flex')}>
          <BackButton hide={isDesktop} onClick={goBackChat} />
          {title && (
            <Text as="h5" level="large" scheme="label">
              {title}
            </Text>
          )}
        </div>
        <div className="flex">{actionComponent && actionComponent}</div>
      </div>
      {children}
    </section>
  );
};
