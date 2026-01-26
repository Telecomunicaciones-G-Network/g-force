import type { TicketValues } from '@module-ticket/domain/interfaces';

import dayjs from 'dayjs';

import { MdOutlineArrowOutward } from 'react-icons/md';

import { Card } from '@gnetwork-ui/components/atoms/cards/card';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ticketStatusBorderColorDictionary } from '@ui-chat/dictionaries/ticket-status-border-color.dictionary';
import { ticketStatusColorDictionary } from '@ui-chat/dictionaries/ticket-status-color.dictionary';

import styles from './chat-ticket-card.module.css';

interface ChatTicketCardProps extends TicketValues {
  onViewDetails?: (ticketId: number, ticketData: TicketValues) => void;
}

export const ChatTicketCard = (props: Readonly<ChatTicketCardProps>) => {
  const {
    createdAt = '',
    description = '',
    number,
    statusName,
    id,
    onViewDetails,
  } = props;
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
            <button
              className={styles.base__arrow_button}
              onClick={() => onViewDetails?.(id || number, props)}
              type="button"
              aria-label="Ver detalles del ticket"
            >
              <MdOutlineArrowOutward className="w-5 h-5" />
            </button>
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
