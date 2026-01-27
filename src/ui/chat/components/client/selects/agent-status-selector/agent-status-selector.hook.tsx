'use client';

import type { AgentStatus } from '@module-chat/domain/types';

import { useState } from 'react';

import { useClickOutside } from '@hook/use-click-outside.hook';

import { useEmitSetAgentStatus } from '@ui-chat/hooks/emit-set-agent-status.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * useAgentStatusSelector
 *
 * This hook is used to manage the agent status selector.
 *
 * TODO: Apply useOptimistic hook to update the agent status efficiently.
 */
export const useAgentStatusSelector = () => {
  const [isChangingStatus, setIsChangingStatus] = useState<boolean>(false);

  const activeAgent = useContactStore((state) => state.activeAgent);

  const {
    closeElement: closeSelector,
    elementRef: selectorRef,
    isOpen: isSelectorOpen,
    toggleOpen: toggleSelector,
  } = useClickOutside<HTMLDivElement>();

  const { emitSetAgentStatus } = useEmitSetAgentStatus();

  const handleStatusChange = (status: AgentStatus) => {
    setIsChangingStatus(true);
    emitSetAgentStatus({
      status,
      onFinally: () => {
        setIsChangingStatus(false);
      },
      onSuccess: () => {
        closeSelector();
      },
    });
  };

  return {
    agentStatus: activeAgent?.status,
    handleStatusChange,
    isChangingStatus,
    isSelectorOpen,
    selectorRef,
    toggleSelector,
  };
};
