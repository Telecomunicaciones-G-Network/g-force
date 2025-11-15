import type { ChatContactProps } from './chat-contact.props';

import Image from 'next/image';

import { ResponsiveImage } from '@gnetwork-ui/components/atoms/images/responsive-image';
import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import styles from './chat-contact.module.css';

export const ChatContact = ({ title = '' }: Readonly<ChatContactProps>) => (
  <ChatDetailsTabContentLayout title={title}>
    <div className={cn(styles.base__image, 'hidden lg:flex')}>
      <ResponsiveImage
        customImageComponent={
          <Image
            alt="User contact 1"
            className="responsive-image-cover rounded-lg"
            fill
            src="/images/chat_user_avatar_1_contact.png"
            sizes="100%"
          />
        }
      />
    </div>
    <div className={styles.base__content}>
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
          Angela Goncalves
        </Text>
      </div>
      <Separator />
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
          Natural
        </Text>
      </div>
      <Separator />
      <div className={styles.base__info}>
        <Text as="span" level="small" scheme="label">
          Estado actual:
        </Text>
        <Tag color="green">Activo</Tag>
      </div>
      <Separator />
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
          0414-3526789
        </Text>
      </div>
      <Separator />
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
          angela.gon@gmail.com
        </Text>
      </div>
    </div>
    <Button className="min-h-[48px]" color="gray" fullWidth scheme="outline">
      Cerrar conversación
    </Button>
  </ChatDetailsTabContentLayout>
);
