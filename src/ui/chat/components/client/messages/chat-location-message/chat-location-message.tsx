'use client';

import type { ChatLocationMessageProps } from './chat-location-message.props';
import { MdPlace, MdForward } from 'react-icons/md';

import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';
import styles from './chat-location-message.module.css';

const buildMapsDeepLink = (lat: number, lng: number): string =>
  `https://www.google.com/maps?q=${lat},${lng}`;

interface ExtendedChatLocationMessageProps extends ChatLocationMessageProps {
  isForwarded?: boolean;
}

export const ChatLocationMessage = ({
  direction,
  address,
  latitude,
  longitude,
  locationName,
  time,
  username,
  isForwarded = false,
  ...rest
}: Readonly<ExtendedChatLocationMessageProps>) => {
  const mapsUrl = buildMapsDeepLink(latitude, longitude);
  const displayName = locationName ?? address ?? 'Ubicación';
  const hasCaption =
    typeof rest.caption === 'string' && rest.caption.length > 0;

  const cardBorderClass = isForwarded ? styles.rounded_b_xl : styles.rounded_xl;

  return (
    <ChatMessage
      direction={direction}
      time={time}
      username={username}
      {...rest}
      caption={null}
    >
      {isForwarded && (
        <div className={styles.forwarded__header}>
          <MdForward className={styles.forwarded__icon} />
          <span>Reenviado</span>
        </div>
      )}

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.base__link} ${cardBorderClass}`}
        aria-label={`Abrir ubicación: ${displayName}`}
      >
        <div className={styles.map__container}>
          <div className={styles.map__grid} />
          <div className={styles.map__line_1} />
          <div className={styles.map__line_2} />
          <div className={styles.map__line_3} />

          <div className={styles.pin__container_center}>
            <MdPlace className={styles.pin__icon_center} />
          </div>

          <div className={styles.map__overlay_gradient} />

          <div className={styles.info__container_overlay}>
            <MdPlace className={styles.info__icon_overlay} />
            <div className={styles.info__text_wrapper}>
              <p className={styles.info__title_overlay}>{displayName}</p>
              {address && locationName && (
                <p className={styles.info__address_overlay}>{address}</p>
              )}
            </div>
          </div>
        </div>
      </a>

      {/* 3. Texto del mensaje debajo de la tarjeta */}
      {hasCaption && <div className={styles.base__caption}>{rest.caption}</div>}
    </ChatMessage>
  );
};
