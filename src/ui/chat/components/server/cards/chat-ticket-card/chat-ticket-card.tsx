import type { ChatTicketCardProps } from './chat-ticket.props';

import { Card } from '@gnetwork-ui/components/atoms/cards/card';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import styles from './chat-ticket-card.module.css';

export const ChatTicketCard = ({
  comment = '',
  number = '',
  solvedDate = '',
  status = '',
}: Readonly<ChatTicketCardProps>) => {
  if (!comment) {
    console.warn(
      'Prop comment is missing on ChatTicketCard component. This component can not be render appropiately.',
    );
  }

  if (!number) {
    console.warn(
      'Prop number is missing on ChatTicketCard component. This component can not be render appropiately.',
    );
  }

  if (!status) {
    console.warn(
      'Prop status is missing on ChatTicketCard component. This component can not be render appropiately.',
    );
  }

  return (
    <>
      {number && (
        <Card
          className="border-l-4 border-solid border-l-success-300"
          fullWidth
        >
          <div className={styles.base}>
            <Text as="h5" level="small" scheme="label">
              #TCK-${number}:
            </Text>
            <div className={styles.base__body}>
              {comment && (
                <Text
                  as="p"
                  className="text-neutral-400"
                  level="small"
                  scheme="label"
                >
                  {comment}
                </Text>
              )}
              <div className={styles.base__info}>
                {solvedDate && (
                  <Text
                    as="span"
                    className="text-neutral-400"
                    level="small"
                    scheme="label"
                  >
                    {solvedDate}
                  </Text>
                )}
                {status && (
                  <Text
                    as="span"
                    className="text-success-300"
                    level="small"
                    scheme="label"
                  >
                    → {status}.
                  </Text>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
