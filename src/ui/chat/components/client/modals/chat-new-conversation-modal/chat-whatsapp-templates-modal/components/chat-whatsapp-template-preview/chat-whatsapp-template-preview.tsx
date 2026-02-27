'use client';

import type { WhatsappTemplate } from '@module-chat/domain/interfaces';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { applyTemplateParams } from '../../chat-whatsapp-templates-modal.hook';

import styles from './chat-whatsapp-template-preview.module.css';

interface ChatWhatsappTemplatePreviewProps {
  paramValues: Record<number, string>;
  selectedTemplate: WhatsappTemplate;
}

/**
 * @name ChatWhatsappTemplatePreview
 *
 * @description Right-side panel — shows only the WhatsApp-style preview bubble
 * centered on a gray/paper background. Parameters are substituted live.
 */
export const ChatWhatsappTemplatePreview = ({
  paramValues,
  selectedTemplate,
}: Readonly<ChatWhatsappTemplatePreviewProps>) => {
  const bodyComp = selectedTemplate.components.find((c) => c.type === 'BODY');
  const rawBodyText = typeof bodyComp?.text === 'string' ? bodyComp.text : '';

  const previewText = applyTemplateParams(rawBodyText, paramValues);

  return (
    <div className={styles.base}>
      <div className={styles.inner}>
        <Text className={styles.label} level="xsmall" scheme="label">
          Vista Previa
        </Text>
        <div className={styles.wa_bubble_wrapper}>
          <div className={styles.wa_bubble}>
            <p className={styles.wa_bubble__text}>{previewText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
