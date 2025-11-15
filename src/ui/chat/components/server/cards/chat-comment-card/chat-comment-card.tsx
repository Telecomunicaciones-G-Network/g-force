import type { ChatCommentCardProps } from './chat-comment-card.props';

import { Card } from '@gnetwork-ui/components/atoms/cards/card';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import styles from './chat-comment-card.module.css';

export const ChatCommentCard = ({
  comment = '',
  date = '',
  title = '',
}: Readonly<ChatCommentCardProps>) => {
  if (!comment) {
    console.warn(
      'Prop comment is missing on ChatCommentCard component. This component can not be render appropiately.',
    );
  }

  if (!title) {
    console.warn(
      'Prop title is missing on ChatCommentCard component. This component can not be render appropiately.',
    );
  }

  return (
    <Card className="flex flex-col gap-6" fullWidth>
      <div className={styles.base__header}>
        <Text as="h5" level="small" scheme="label">
          {title}
        </Text>
        {date && (
          <Text
            as="span"
            className="text-neutral-500"
            level="small"
            scheme="label"
          >
            {date}
          </Text>
        )}
      </div>
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
    </Card>
  );
};
