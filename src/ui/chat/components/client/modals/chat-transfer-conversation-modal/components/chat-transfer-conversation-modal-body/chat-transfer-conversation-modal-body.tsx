'use client';

import type { ChatTransferConversationModalBodyProps } from './chat-transfer-conversation-modal-body.props';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { SelectInputController } from '@ui-core/components/client/inputs/select-input-controller';

import { ChatTransferConversationModalError } from '../chat-transfer-conversation-modal-error';
import { ChatTransferConversationModalSkeleton } from '../chat-transfer-conversation-modal-skeleton';

import { useChatTransferConversationModalBody } from './chat-transfer-conversation-modal-body.hook';

import { parseAgentsToSelectItem } from './utils/parse-agents-to-select-item.util';
import { parseTeamsToSelectItem } from './utils/parse-teams-to-select-item.util';

import styles from './chat-transfer-conversation-modal-body.module.css';

export const ChatTransferConversationModalBody = ({
  onClose,
}: Readonly<ChatTransferConversationModalBodyProps>) => {
  const {
    agents,
    clearErrors,
    control,
    handleSubmit,
    isError,
    isAgentsLoading,
    isChatTransferConversationPending,
    isTeamsLoading,
    onSubmit,
    teamInput,
    teams,
  } = useChatTransferConversationModalBody({ onClose });

  return (
    <>
      {isTeamsLoading && <ChatTransferConversationModalSkeleton />}
      {!isTeamsLoading && isError && <ChatTransferConversationModalError />}
      {!isTeamsLoading && !isError && (
        <form className={styles.base} onSubmit={handleSubmit(onSubmit)}>
          <SelectInputController
            control={control}
            fullWidth
            indicator="Equipos"
            label="Seleccione un equipo"
            name="team"
            onClear={() => clearErrors()}
            options={parseTeamsToSelectItem(teams)}
            required
            triggerLabel="Equipos"
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
              triggerLabel="Agentes"
            />
          )}
          <Button
            color="red"
            disabled={isTeamsLoading || isChatTransferConversationPending}
            fullWidth
            loading={isChatTransferConversationPending}
            type="submit"
          >
            {isChatTransferConversationPending
              ? 'Transfiriendo...'
              : 'Transferir'}
          </Button>
        </form>
      )}
    </>
  );
};
