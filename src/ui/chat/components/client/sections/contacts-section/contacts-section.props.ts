import type { GetContactsResponse } from '@modules/chat/domain/interfaces';

/**
 * @interface ContactsSectionProps
 *
 * @description This interface is used to define the props for the contact section.
 *
 * @property {Promise<GetContactsResponse>} chatContactsResponsePromise - The promise for the chat contacts response.
 */
export interface ContactsSectionProps {
  chatContactsResponsePromise: Promise<GetContactsResponse>;
}
