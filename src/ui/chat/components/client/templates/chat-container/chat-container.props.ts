// TODO: Debo pasar la promesa por un context asi no tengo que hacer props drilling y este archivo no deberia ir

import type { GetContactsViewModel } from '@module-chat/infrastructure/viewmodels';

export interface ChatContainerProps {
  chatContactsResponsePromise: Promise<GetContactsViewModel>;
}
