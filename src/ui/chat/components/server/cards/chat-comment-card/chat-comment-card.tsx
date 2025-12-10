import type { NoteValues } from '@module-chat/domain/interfaces';

import dayjs from 'dayjs';

import { Card } from '@gnetwork-ui/components/atoms/cards/card';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { shortString } from '@stringify/utils/short-string.util';

import styles from './chat-comment-card.module.css';

export const ChatCommentCard = ({
  agentId,
  comment = '',
  createdAt,
}: Readonly<Omit<NoteValues, 'id' | 'updatedAt'>>) => {
  if (!agentId) {
    console.warn(
      'Prop agentId is missing on ChatCommentCard component. This component can not be render appropiately.',
    );
  }

  if (!comment) {
    console.warn(
      'Prop comment is missing on ChatCommentCard component. This component can not be render appropiately.',
    );
  }

  return (
    <>
      {agentId && (
        <Card className="flex flex-col gap-6" fullWidth>
          <div className={styles.base__header}>
            <Text as="h5" level="small" scheme="label">
              Agente # {shortString(agentId, 9, true)}
            </Text>
            {createdAt && (
              <Text
                as="span"
                className="text-neutral-500"
                level="small"
                scheme="label"
              >
                {dayjs(createdAt).format('DD/MM/YYYY')}
              </Text>
            )}
          </div>
          {comment && (
            <div className={styles.base__body}>
              <Text
                as="p"
                align="left"
                className="text-neutral-600"
                level="small"
                scheme="label"
              >
                {comment}
              </Text>
            </div>
          )}
        </Card>
      )}
    </>
  );
};
