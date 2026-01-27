'use client';

import type { AgentStatusSelectorTriggerProps } from './agent-status-selector-trigger.props';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { AGENT_STATUS_COLOR_DICTIONARY } from '@ui-chat/dictionaries/agent-status-color.dictionary';
import { AGENT_STATUS_LABEL_DICTIONARY } from '@ui-chat/dictionaries/agent-status-label.dictionary';

import { AgentStatusSelectorLoader } from '../agent-status-selector-loader';
import { AgentStatusSelectorIcon } from '../agent-status-selector-icon';

import styles from './agent-status-selector-trigger.module.css';

/**
 * Agent Status Selector Trigger component.
 *
 * This component renders the trigger button for the agent status selector.
 *
 * @property agentStatus - The agent status.
 * @property disabled - Whether the button is disabled.
 * @property isLoading - Whether the button is loading.
 * @property isOpen - Whether the button is open.
 * @property onClick - The function to call when the button is clicked.
 */
export const AgentStatusSelectorTrigger = ({
  agentStatus,
  disabled = false,
  isLoading = false,
  isOpen = false,
  onClick,
}: Readonly<AgentStatusSelectorTriggerProps>) => (
  <button
    className={cn(
      styles.base,
      'bg-chromatic border border-solid border-input-border font-medium text-chromatic-inverted text-sm hover:bg-neutral-200',
      isLoading &&
        'cursor-not-allowed opacity-70 active:transform-none hover:bg-chromatic',
    )}
    disabled={disabled || isLoading}
    onClick={onClick}
    type="button"
  >
    <span
      className={cn(
        styles.base__dot,
        agentStatus
          ? AGENT_STATUS_COLOR_DICTIONARY?.[agentStatus]
          : 'bg-neutral-300',
      )}
    />
    <span className={styles.base__label}>
      {agentStatus ? AGENT_STATUS_LABEL_DICTIONARY?.[agentStatus] : ''}
    </span>
    {isLoading ? (
      <AgentStatusSelectorLoader />
    ) : (
      <AgentStatusSelectorIcon isOpen={isOpen} />
    )}
  </button>
);
