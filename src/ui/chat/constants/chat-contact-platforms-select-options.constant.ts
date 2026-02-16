import type { SelectItem } from '@gnetwork-ui/components/molecules/inputs/select-input';

import { ContactPlatforms } from '@module-chat/domain/enums/contact-platforms.enum';

/**
 * @name CHAT_CONTACT_PLATFORMS_SELECT_OPTIONS
 *
 * @description This constant is used to define the options for the platforms select input.
 *
 * @constant {SelectItem[]} The options for the platforms select input.
 *
 * TODO: Set ALL value in constant
 */
export const CHAT_CONTACT_PLATFORMS_SELECT_OPTIONS: SelectItem[] = [
  {
    label: 'Todas',
    value: 'ALL',
  },
  {
    label: 'WhatsApp',
    value: ContactPlatforms.WHATSAPP,
  },
] as const;
