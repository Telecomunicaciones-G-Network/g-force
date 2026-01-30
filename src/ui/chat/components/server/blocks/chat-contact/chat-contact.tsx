'use client';

import type { ChatContactProps } from './chat-contact.props';

import { MdMoodBad } from 'react-icons/md';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { capitalizeWords } from '@stringify/utils/capitalize-words.util';
import { formatPhoneNumber } from '@stringify/utils/format-phone-number.util';

import { ChatDetailsContactCloseConversationButton } from '@ui-chat/components/client/buttons/chat-details-contact-close-conversation-button';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatContactAvatar } from './components/chat-contact-avatar';
import { ChatContactInformationSkeleton } from './components/chat-contact-information-skeleton';

import { useChatContact } from './chat-contact.hook';

import styles from './chat-contact.module.css';

export const ChatContact = ({ title = '' }: Readonly<ChatContactProps>) => {
  const {
    contactInformation,
    contactName,
    isContactActive,
    isError,
    isLoading,
    phoneNumber,
  } = useChatContact();

  return (
    <ChatDetailsTabContentLayout title={title}>
      <ChatContactAvatar />
      <div className={styles.base__content}>
        {isLoading && <ChatContactInformationSkeleton />}
        {!isLoading && isError && (
          <div className={styles.base__content_error}>
            <MdMoodBad className="min-h-10 min-w-10 size-10" />
            <Text
              as="h5"
              className="text-center text-neutral-900"
              level="medium"
              scheme="label"
            >
              Ha ocurrido un error al cargar la información del contacto
            </Text>
          </div>
        )}
        {!isLoading && !isError && (
          <>
            {contactName && (
              <>
                <div className={styles.base__info}>
                  <Text as="span" level="small" scheme="label">
                    Nombre:
                  </Text>
                  <Text
                    as="span"
                    align="end"
                    className="text-neutral-500"
                    level="small"
                    scheme="label"
                  >
                    {capitalizeWords(contactName) ??
                      capitalizeWords(contactInformation?.fullName)}
                  </Text>
                </div>
                <Separator />
              </>
            )}
            {/* contactInformation?.clientType && (
              <>
                <div className={styles.base__info}>
                  <Text as="span" level="small" scheme="label">
                    Tipo de cliente:
                  </Text>
                  <Text
                    as="span"
                    align="end"
                    className="text-neutral-500"
                    level="small"
                    scheme="label"
                  >
                    {contactInformation?.clientType}
                  </Text>
                </div>
                <Separator />
              </>
            )} */}
            {isContactActive && (
              <>
                <div className={styles.base__info}>
                  <Text as="span" level="small" scheme="label">
                    Estado actual:
                  </Text>
                  <Tag color="green">Activo</Tag>
                </div>
                <Separator />
              </>
            )}
            {phoneNumber && (
              <>
                <div className={styles.base__info}>
                  <Text as="span" level="small" scheme="label">
                    Teléfono:
                  </Text>
                  <Text
                    as="span"
                    align="end"
                    className="text-neutral-500"
                    level="small"
                    scheme="label"
                  >
                    {formatPhoneNumber(phoneNumber) ??
                      formatPhoneNumber(contactInformation?.phoneNumber ?? '')}
                  </Text>
                </div>
                <Separator />
              </>
            )}
            {contactInformation?.email && (
              <div className={styles.base__info}>
                <Text as="span" level="small" scheme="label">
                  Correo:
                </Text>
                <Text
                  as="span"
                  className="text-neutral-500"
                  level="small"
                  scheme="label"
                >
                  {contactInformation?.email}
                </Text>
              </div>
            )}
          </>
        )}
      </div>
      {/* <ChatDetailsContactCloseConversationButton /> */}
    </ChatDetailsTabContentLayout>
  );
};
