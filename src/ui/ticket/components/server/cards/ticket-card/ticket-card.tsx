import type { TicketCardProps } from './ticket-card.props';

import dayjs from 'dayjs';

import { Card } from '@gnetwork-ui/components/atoms/cards/card';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ticketStatusBorderColorDictionary } from '@ui-ticket/dictionaries/ticket-status-border-color.dictionary';
import { ticketStatusColorDictionary } from '@ui-ticket/dictionaries/ticket-status-color.dictionary';

import styles from './ticket-card.module.css';

export const TicketCard = ({
  createdAt = '',
  description = '',
  number,
  statusName,
}: Readonly<TicketCardProps>) => {
  if (!number) {
    console.warn(
      'Prop number is missing on TicketCard component. This component can not be render appropriately.',
    );
  }

  if (!statusName) {
    console.warn(
      'Prop statusName is missing on TicketCard component. This component can not be render appropriately.',
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
            {number && (
              <Text as="h5" level="small" scheme="label">
                #TCK-{number}:
              </Text>
            )}
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
                    {dayjs(createdAt).format('DD/MM/YYYY')}
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
