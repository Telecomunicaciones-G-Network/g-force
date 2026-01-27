import type { AgentStatusSelectorIconProps } from './agent-status-selector-icon.props';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './agent-status-selector-icon.module.css';

/**
 * Agent Status Selector Icon component.
 *
 * This component renders a chevron SVG, typically used to indicate the open/closed state of the dropdown.
 *
 * @property isOpen - Whether the dropdown is open (affects icon rotation).
 */
export const AgentStatusSelectorIcon = ({
  isOpen = false,
}: Readonly<AgentStatusSelectorIconProps>) => (
  <svg
    className={cn(styles.base, 'text-neutral-500', isOpen && 'rotate-180')}
    fill="none"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Agent Status Selector Icon</title>
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);
