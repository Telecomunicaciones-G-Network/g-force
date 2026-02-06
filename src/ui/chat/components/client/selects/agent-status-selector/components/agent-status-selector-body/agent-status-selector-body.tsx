import type { AgentStatusSelectorOption } from '@ui-chat/interfaces';
import type { AgentStatusSelectorBodyProps } from './agent-status-selector-body.props';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { agentStatusColorDictionary } from '@ui-chat/dictionaries/agent-status-color.dictionary';

import { AgentStatusSelectorOptions } from '@ui-chat/iterators/agent-status-selector-options.iterator';

import styles from './agent-status-selector-body.module.css';

/**
 * @name AgentStatusSelectorBody
 *
 * @description This component renders the body of the agent status selector.
 *
 * @property {AgentStatus} [agentStatus] - The agent status.
 * @property {function} [onChange] - The function to call when the status is changed.
 */
export const AgentStatusSelectorBody = ({
  agentStatus,
  onChange,
}: Readonly<AgentStatusSelectorBodyProps>) => (
  <div
    className={cn(
      styles.base,
      'bg-chromatic border border-solid border-input-border',
    )}
  >
    {AgentStatusSelectorOptions?.map(
      (agentStatusSelectorOption: AgentStatusSelectorOption) => (
        <button
          key={agentStatusSelectorOption?.id}
          className={cn(
            styles.base__option,
            'bg-chromatic font-normal text-chromatic-inverted text-sm hover:bg-neutral-50',
            agentStatus === agentStatusSelectorOption?.status &&
              'bg-neutral-50 font-medium',
          )}
          onClick={() => onChange?.(agentStatusSelectorOption?.status)}
          type="button"
        >
          <span
            className={cn(
              styles.base__option_dot,
              agentStatusColorDictionary?.[agentStatusSelectorOption?.status],
            )}
          />
          <span className={styles.base__option_label}>
            {agentStatusSelectorOption?.label}
          </span>
        </button>
      ),
    )}
  </div>
);
