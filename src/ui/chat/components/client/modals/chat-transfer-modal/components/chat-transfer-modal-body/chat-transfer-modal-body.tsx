'use client';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';

import { ChatTransferModalError } from '../chat-transfer-modal-error';
import { ChatTransferModalSkeleton } from '../chat-transfer-modal-skeleton';

import { useChatTransferModalBody } from './chat-transfer-modal-body.hook';

import { parseTeamsToSelectItem } from './utils/parse-teams-to-select-item.util';

import styles from './chat-transfer-modal-body.module.css';

export const ChatTransferModalBody = () => {
  const { isError, isLoading, teams } = useChatTransferModalBody();

  return (
    <>
      {isLoading && <ChatTransferModalSkeleton />}
      {!isLoading && isError && <ChatTransferModalError />}
      {!isLoading && !isError && (
        <div className={styles.base}>
          <SelectInput
            fullWidth
            indicator="Equipo"
            label="Seleccione un equipo"
            options={parseTeamsToSelectItem(teams)}
          />
          <Button color="red" fullWidth>
            Transferir
          </Button>
        </div>
      )}
    </>
  );
};
