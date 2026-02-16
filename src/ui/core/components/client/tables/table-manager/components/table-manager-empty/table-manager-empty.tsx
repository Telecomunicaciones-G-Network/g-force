import { MdOutlineSupportAgent } from 'react-icons/md';

import { EmptyListMessage } from '@gnetwork-ui/components/templates/blocks/empty-list-message';

/**
 * @name TableManagerEmpty
 *
 * @description Component to display a empty list message in the table manager
 */
export const TableManagerEmpty = () => (
  <EmptyListMessage
    className="bg-chromatic border-x border-b border-solid border-b-neutral-200 border-x-neutral-200 rounded-b-lg"
    icon={<MdOutlineSupportAgent className="size-16" />}
    message="No hay agentes que mostrar"
    explanation="La tabla mostrará agentes cuando existan registros o el criterio de busqueda coincida con algun agente."
  />
);
