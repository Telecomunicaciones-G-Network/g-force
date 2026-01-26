'use client';

import type { AgentStatus } from '@module-chat/domain/enums/agent-status.enum';

import { create } from 'zustand';

interface AgentStatusStoreState {
  isChangingStatus: boolean;
  pendingStatus: AgentStatus | null;

  setIsChangingStatus: (isChanging: boolean) => void;
  setPendingStatus: (status: AgentStatus | null) => void;
  clearPendingStatus: () => void;
}

export const useAgentStatusStore = create<AgentStatusStoreState>((set) => ({
  isChangingStatus: false,
  pendingStatus: null,

  setIsChangingStatus: (isChanging: boolean) =>
    set({ isChangingStatus: isChanging }),

  setPendingStatus: (status: AgentStatus | null) =>
    set({ pendingStatus: status, isChangingStatus: true }),

  clearPendingStatus: () =>
    set({ pendingStatus: null, isChangingStatus: false }),
}));
