// TODO: Debo pasar la promesa por un context asi no tengo que hacer props drilling y este archivo no deberia ir

import type { GetContactsResponse } from '@module-chat/domain/interfaces';

export interface ChatContainerProps {
  chatContactsResponsePromise: Promise<GetContactsResponse>;
}
