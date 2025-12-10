import type { ChatTicketCardProps } from './chat-ticket.props';

import { Card } from '@gnetwork-ui/components/atoms/cards/card';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ticketStatusBorderColorDictionary } from '@ui-chat/dictionaries/ticket-status-border-color.dictionary';
import { ticketStatusColorDictionary } from '@ui-chat/dictionaries/ticket-status-color.dictionary';

import styles from './chat-ticket-card.module.css';

export const ChatTicketCard = ({
  createdAt = '',
  description = '',
  number,
  status,
  statusName,
}: Readonly<ChatTicketCardProps>) => {
  if (!description) {
    console.warn(
      'Prop description is missing on ChatTicketCard component. This component can not be render appropiately.',
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
        <Card className={ticketStatusBorderColorDictionary?.[status]} fullWidth>
          <div className={styles.base}>
            <Text as="h5" level="small" scheme="label">
              #TCK-${number}:
            </Text>
            <div className={styles.base__body}>
              {description && (
                <Text
                  as="p"
                  className="text-neutral-400"
                  level="small"
                  scheme="label"
                >
                  {description}
                </Text>
              )}
              <div className={styles.base__info}>
                {createdAt && (
                  <Text
                    as="span"
                    className="text-neutral-400"
                    level="small"
                    scheme="label"
                  >
                    {createdAt}
                  </Text>
                )}
                {status && (
                  <Text
                    as="span"
                    className={ticketStatusColorDictionary?.[status]}
                    level="small"
                    scheme="label"
                  >
                    → {statusName}
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
