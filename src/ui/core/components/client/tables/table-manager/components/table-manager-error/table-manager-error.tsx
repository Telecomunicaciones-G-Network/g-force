import { MdErrorOutline } from 'react-icons/md';

import { EmptyListMessage } from '@gnetwork-ui/components/templates/blocks/empty-list-message';

/**
 * @name TableManagerError
 *
 * @description Component to display a error message in the table manager
 *
 * // TODO: Handler error boundary reset button
 */
export const TableManagerError = () => (
  <EmptyListMessage
    className="bg-chromatic border border-solid border-neutral-200 rounded-lg"
    icon={<MdErrorOutline className="size-16" />}
    message="Ha ocurrido un error al cargar los agentes"
    explanation="Intenta nuevamente o vuelve al inicio para continuar."
  />
);
