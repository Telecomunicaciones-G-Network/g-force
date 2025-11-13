import type { ChatStatusProps } from './chat-status.props';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import styles from './chat-status.module.css';

export const ChatStatus = ({
  category = '',
  contractCondition = '',
  lastUpdate = '',
  status = '',
  title = '',
}: Readonly<ChatStatusProps>) => (
  <ChatDetailsTabContentLayout title={title}>
    <div className={styles.base}>
      {status && (
        <>
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              Estado:
            </Text>
            <Tag color="green">{status}</Tag>
          </div>
          <Separator />
        </>
      )}
      {lastUpdate && (
        <>
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              Última Actualización:
            </Text>
            <Text
              as="span"
              align="end"
              className="text-neutral-500"
              level="small"
              scheme="label"
            >
              {lastUpdate}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {contractCondition && (
        <>
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              Condición del contrato:
            </Text>
            <Text
              as="span"
              align="end"
              className="min-w-[143px] w-full text-neutral-500"
              level="small"
              scheme="label"
            >
              {contractCondition}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {category && (
        <div className={styles.base__info}>
          <Text
            as="label"
            className="text-neutral-900"
            level="small"
            scheme="label"
          >
            Categoría:
          </Text>
          <Tag color="blue">{category}</Tag>
        </div>
      )}
    </div>
  </ChatDetailsTabContentLayout>
);
