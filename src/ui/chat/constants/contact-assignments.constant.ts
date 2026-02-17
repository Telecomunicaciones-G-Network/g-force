import type { ContactAssignment } from '@module-chat/domain/types';

import { ContactAssignments } from '@module-chat/domain/enums/contact-assignments.enum';

/**
 * @constant CONTACT_ASSIGNMENTS
 *
 * @description This constant is used to define the contact assignment.
 */
export const CONTACT_ASSIGNMENTS = Object.values(
  ContactAssignments,
) as ContactAssignment[];
