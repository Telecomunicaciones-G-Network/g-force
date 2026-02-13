import type { ContactPlatform } from '@module-chat/domain/types';

import { ContactPlatforms } from '@module-chat/domain/enums/contact-platforms.enum';

/**
 * @name CONTACT_PLATFORMS
 *
 * @description This constant is used to define the contact platforms.
 *
 * @constant {ContactPlatform[]} The contact platforms.
 */
export const CONTACT_PLATFORMS = Object.values(
  ContactPlatforms,
) as ContactPlatform[];
