import type { ChatDetailsTabContentLayoutProps } from './chat-details-tab-content-layout.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-details-tab-content-layout.module.css';

export const ChatDetailsTabContentLayout = ({
  children,
  title = '',
}: Readonly<ChatDetailsTabContentLayoutProps>) => (
  <section className={cn(styles.base, 'py-6 px-4 tablet:p-8 lg:py-6 lg:px-8')}>
    {title && (
      <Text as="h5" level="large" scheme="label">
        {title}
      </Text>
    )}
    {children}
  </section>
);
