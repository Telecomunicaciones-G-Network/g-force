'use client';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { SelectInputController } from '@ui-core/components/client/inputs/select-input-controller';

import { ChatTransferModalError } from '../chat-transfer-modal-error';
import { ChatTransferModalSkeleton } from '../chat-transfer-modal-skeleton';

import { useChatTransferModalBody } from './chat-transfer-modal-body.hook';

import { parseTeamsToSelectItem } from './utils/parse-teams-to-select-item.util';

import styles from './chat-transfer-modal-body.module.css';

export const ChatTransferModalBody = () => {
  const {
    clearErrors,
    control,
    handleSubmit,
    isError,
    isLoading,
    onSubmit,
    teams,
    teamInput,
  } = useChatTransferModalBody();

  return (
    <>
      {isLoading && <ChatTransferModalSkeleton />}
      {!isLoading && isError && <ChatTransferModalError />}
      {!isLoading && !isError && (
        <form className={styles.base} onSubmit={handleSubmit(onSubmit)}>
          <SelectInputController
            control={control}
            customMessageClassName="text-red-600"
            fullWidth
            indicator="Equipos"
            label="Seleccione un equipo"
            name="team"
            onClear={() => clearErrors()}
            options={parseTeamsToSelectItem(teams)}
            required
          />
          {teamInput && (
            <SelectInputController
              control={control}
              fullWidth
              indicator="Agentes"
              label="Seleccione un agente"
              name="agent"
              onClear={() => clearErrors()}
              options={[]}
            />
          )}
          <Button color="red" disabled={isLoading} fullWidth type="submit">
            Transferir
          </Button>
        </form>
      )}
    </>
  );
};
