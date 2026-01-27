'use client';

import { AgentStatusSelectorBody } from './components/agent-status-selector-body';
import { AgentStatusSelectorTrigger } from './components/agent-status-selector-trigger';

import { useAgentStatusSelector } from './agent-status-selector.hook';

import styles from './agent-status-selector.module.css';

/**
 * Agent Status Selector component.
 *
 * This component renders the agent status selector.
 */
export const AgentStatusSelector = () => {
  const {
    agentStatus,
    handleStatusChange,
    isChangingStatus,
    isSelectorOpen,
    selectorRef,
    toggleSelector,
  } = useAgentStatusSelector();

  return (
    <div ref={selectorRef} className={styles.base}>
      <AgentStatusSelectorTrigger
        agentStatus={agentStatus}
        disabled={isChangingStatus}
        isLoading={isChangingStatus}
        isOpen={isSelectorOpen}
        onClick={toggleSelector}
      />
      {isSelectorOpen && !isChangingStatus && (
        <AgentStatusSelectorBody
          agentStatus={agentStatus}
          onChange={handleStatusChange}
        />
      )}
    </div>
  );
};
