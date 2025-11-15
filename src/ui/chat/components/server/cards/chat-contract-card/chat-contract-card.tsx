import type { ChatContractCardProps } from './chat-contract-card.props';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';
import { Accordion } from '@gnetwork-ui/components/organisms/accordions/accordion';

import styles from './chat-contract-card.module.css';

export const ChatContractCard = ({
  expirationDate = '',
  name = '',
  napbox = '',
  location = '',
  number = '',
  open = false,
  speed = '',
  startDate = '',
  status = '',
  title = '',
}: Readonly<ChatContractCardProps>) => (
  <Accordion fullWidth open={open} label={title}>
    <div className={styles.base}>
      {number && (
        <>
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              N.º de contrato:
            </Text>
            <Text
              as="span"
              align="end"
              className="min-w-[143px] w-full text-neutral-400"
              level="small"
              scheme="label"
            >
              {number}
            </Text>
          </div>
          <Separator />
        </>
      )}
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
      {startDate && (
        <>
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              Fecha de inicio:
            </Text>
            <Text
              as="span"
              align="end"
              className="min-w-[143px] w-full text-neutral-400"
              level="small"
              scheme="label"
            >
              {startDate}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {expirationDate && (
        <>
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              Fecha de vencimiento:
            </Text>
            <Text
              as="span"
              align="end"
              className="text-neutral-400"
              level="small"
              scheme="label"
            >
              {expirationDate}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {name && (
        <>
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              Plan contratado:
            </Text>
            <Text
              as="span"
              align="end"
              className="min-w-[143px] w-full text-neutral-400"
              level="small"
              scheme="label"
            >
              {name}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {speed && (
        <>
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              Velocidad:
            </Text>
            <Text
              as="span"
              align="end"
              className="min-w-[143px] w-full text-neutral-400"
              level="small"
              scheme="label"
            >
              {speed}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {napbox && (
        <>
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              Caja NAP asignada:
            </Text>
            <Text
              as="span"
              align="end"
              className="min-w-[143px] w-full text-neutral-400"
              level="small"
              scheme="label"
            >
              {napbox}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {location && (
        <div className={styles.base__info}>
          <Text
            as="label"
            className="text-neutral-900"
            level="small"
            scheme="label"
          >
            Ubicación:
          </Text>
          <Text
            as="span"
            align="end"
            className="min-w-[143px] w-full text-neutral-400"
            level="small"
            scheme="label"
          >
            {location}
          </Text>
        </div>
      )}
    </div>
  </Accordion>
);
