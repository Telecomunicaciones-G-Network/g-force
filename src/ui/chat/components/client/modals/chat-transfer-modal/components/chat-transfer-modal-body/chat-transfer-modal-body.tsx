'use client';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { SelectInputController } from '@ui-core/components/client/inputs/select-input-controller';

import { ChatTransferModalError } from '../chat-transfer-modal-error';
import { ChatTransferModalSkeleton } from '../chat-transfer-modal-skeleton';

import { useChatTransferModalBody } from './chat-transfer-modal-body.hook';

import { parseAgentsToSelectItem } from './utils/parse-agents-to-select-item.util';
import { parseTeamsToSelectItem } from './utils/parse-teams-to-select-item.util';

import styles from './chat-transfer-modal-body.module.css';

export const ChatTransferModalBody = () => {
  const {
    agents,
    clearErrors,
    control,
    handleSubmit,
    isError,
    isAgentsLoading,
    isTeamsLoading,
    onSubmit,
    teamInput,
    teams,
  } = useChatTransferModalBody();

  return (
    <>
      {isTeamsLoading && <ChatTransferModalSkeleton />}
      {!isTeamsLoading && isError && <ChatTransferModalError />}
      {!isTeamsLoading && !isError && (
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
          {isAgentsLoading && <Skeleton className="h-[58px] w-full" />}
          {teamInput && agents?.length > 0 && !isAgentsLoading && (
            <SelectInputController
              control={control}
              fullWidth
              indicator="Agentes"
              label="Seleccione un agente"
              name="agent"
              onClear={() => clearErrors()}
              options={parseAgentsToSelectItem(agents)}
            />
          )}
          <Button color="red" disabled={isTeamsLoading} fullWidth type="submit">
            Transferir
          </Button>
        </form>
      )}
    </>
  );
};
