import type { ChatContractCardProps } from './chat-contract-card.props';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';
import { Accordion } from '@gnetwork-ui/components/organisms/accordions/accordion';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

import { contractStatusTagColorDictionary } from '@ui-chat/dictionaries/contract-status-tag-color.dictionary';

import styles from './chat-contract-card.module.css';

export const ChatContractCard = ({
  address = '',
  expirationDate = '',
  installationDate = '',
  napBox = '',
  number,
  open = false,
  plan = '',
  speedPlan = '',
  status,
  statusName,
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
      {statusName && status && (
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
            <Tag
              color={
                contractStatusTagColorDictionary?.[status] ?? TagColors.GRAY
              }
            >
              {statusName}
            </Tag>
          </div>
          <Separator />
        </>
      )}
      {installationDate && (
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
              {installationDate}
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
      {plan && (
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
              {plan}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {speedPlan && (
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
              {speedPlan}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {napBox && (
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
              {napBox}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {address && (
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
            {address}
          </Text>
        </div>
      )}
    </div>
  </Accordion>
);
