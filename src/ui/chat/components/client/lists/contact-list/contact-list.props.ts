import type { Contact } from '@module-chat/domain/interfaces';

/**
 * @name ContactListProps
 *
 * @description This interface is used to define the props for the contact list.
 *
 * @property {Contact[]} contacts - The contacts to display in the list.
 */
export interface ContactListProps {
  contacts?: Contact[];
}
