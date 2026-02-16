import type { ChatContractCardProps } from './chat-contract-card.props';

import dayjs from 'dayjs';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';
import { Accordion } from '@gnetwork-ui/components/organisms/accordions/accordion';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

import { contractStatusTagColorDictionary } from '@ui-chat/dictionaries/contract-status-tag-color.dictionary';

import styles from './chat-contract-card.module.css';

export const ChatContractCard = ({
  contract,
  open = false,
  title = '',
}: Readonly<ChatContractCardProps>) => (
  <Accordion fullWidth open={open} label={title}>
    <div className={styles.base}>
      {contract?.number && (
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
              {contract?.number}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {contract?.statusCode && contract?.statusName && (
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
                contractStatusTagColorDictionary?.[contract?.statusCode] ??
                TagColors.GRAY
              }
            >
              {contract?.statusName}
            </Tag>
          </div>
          <Separator />
        </>
      )}
      {contract?.installationDate && (
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
              {dayjs(contract?.installationDate).format('DD/MM/YYYY') ?? ''}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {contract?.planName && (
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
              {contract?.planName}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {contract?.speedPlan && (
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
              {contract?.speedPlan}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {contract?.napBox && (
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
              {contract?.napBox}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {contract?.address && (
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
            {contract?.address}
          </Text>
        </div>
      )}
    </div>
  </Accordion>
);
