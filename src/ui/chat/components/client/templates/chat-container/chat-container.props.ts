import type { GetContactsResponse } from '@module-chat/domain/interfaces';

/**
 * @interface ChatContainerProps
 *
 * @description This interface is used to define the props for the chat container.
 *
 * @property {Promise<GetContactsResponse>} chatContactsResponsePromise - The promise for the chat contacts response.
 */
export interface ChatContainerProps {
  chatContactsResponsePromise: Promise<GetContactsResponse>;
}
