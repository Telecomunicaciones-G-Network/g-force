'use client';

import type { ChatDetailsTabContentLayoutProps } from './chat-details-tab-content-layout.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { BackButton } from '@gnetwork-ui/components/organisms/buttons/back-button';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useChatDetailsTabContentLayout } from './chat-details-tab-content-layout.hook';

import styles from './chat-details-tab-content-layout.module.css';

export const ChatDetailsTabContentLayout = ({
  children,
  title = '',
}: Readonly<ChatDetailsTabContentLayoutProps>) => {
  const { goBackChat, isDesktop } = useChatDetailsTabContentLayout();

  return (
    <section
      className={cn(styles.base, 'py-6 px-4 tablet:p-8 lg:py-6 lg:px-8')}
    >
      <div className="flex items-center gap-2">
        <BackButton hide={isDesktop} onClick={goBackChat} />
        {title && (
          <Text as="h5" level="large" scheme="label">
            {title}
          </Text>
        )}
      </div>
      {children}
    </section>
  );
};
