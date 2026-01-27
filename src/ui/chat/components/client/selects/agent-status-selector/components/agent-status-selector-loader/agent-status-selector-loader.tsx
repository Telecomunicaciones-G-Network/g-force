import styles from './agent-status-selector-loader.module.css';

import { cn } from '@gnetwork-ui/utils/cn.util';

/**
 * Agent Status Selector Loader component.
 *
 * This component renders a spinner SVG, typically used to indicate loading state
 * inside the agent status selector trigger button.
 */
export const AgentStatusSelectorLoader = () => (
  <svg
    className={cn(styles.base__spinner, 'text-neutral-500')}
    fill="none"
    height="20"
    viewBox="0 0 24 24"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Agent Status Selector Loader</title>
    <circle
      className={styles.base__spinner_circle}
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className={styles.base__spinner_path}
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      fill="currentColor"
    />
  </svg>
);
