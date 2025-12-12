import type { TicketValues } from '@module-ticket/domain/interfaces';

import { Card } from '@gnetwork-ui/components/atoms/cards/card';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ticketStatusBorderColorDictionary } from '@ui-chat/dictionaries/ticket-status-border-color.dictionary';
import { ticketStatusColorDictionary } from '@ui-chat/dictionaries/ticket-status-color.dictionary';

import styles from './chat-ticket-card.module.css';

export const ChatTicketCard = ({
  createdAt = '',
  description = '',
  number,
  statusName,
}: Readonly<TicketValues>) => {
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

  if (!statusName) {
    console.warn(
      'Prop statusName is missing on ChatTicketCard component. This component can not be render appropiately.',
    );
  }

  return (
    <>
      {number && (
        <Card
          className={ticketStatusBorderColorDictionary?.[statusName]}
          fullWidth
        >
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
                {statusName && (
                  <Text
                    as="span"
                    className={ticketStatusColorDictionary?.[statusName]}
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
