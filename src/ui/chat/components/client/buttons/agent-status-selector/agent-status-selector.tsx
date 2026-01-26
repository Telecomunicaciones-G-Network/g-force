'use client';

import type { AgentStatusSelectorProps } from './agent-status-selector.props';

import { useState, useRef, useEffect } from 'react';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { AgentStatus } from '@module-chat/domain/enums/agent-status.enum';

import {
  AGENT_STATUS_CONFIG,
  AGENT_STATUS_OPTIONS,
} from '@ui-chat/constants/agent-status-config.constant';

import { useEmitChangeAgentStatus } from '@ui-chat/hooks/emit-change-agent-status.hook';
import { useAgentStatusStore } from '@ui-chat/stores/agent-status-store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import styles from './agent-status-selector.module.css';

export const AgentStatusSelector = ({
  className,
}: Readonly<AgentStatusSelectorProps>) => {
  const activeAgent = useContactStore((state) => state.activeAgent);
  const isChangingStatus = useAgentStatusStore(
    (state) => state.isChangingStatus,
  );
  const pendingStatus = useAgentStatusStore((state) => state.pendingStatus);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { emitChangeAgentStatus } = useEmitChangeAgentStatus();

  const currentStatus = activeAgent?.status || AgentStatus.ONLINE;
  const displayStatus =
    isChangingStatus && pendingStatus ? pendingStatus : currentStatus;
  const currentConfig = AGENT_STATUS_CONFIG[displayStatus];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleStatusChange = (status: AgentStatus) => {
    emitChangeAgentStatus({
      status,
      onSuccess: () => {
        setIsOpen(false);
      },
    });
  };

  return (
    <div className={cn(styles.base, className)} ref={dropdownRef}>
      <button
        className={cn(
          styles.base__button,
          isChangingStatus && styles['base__button--loading'],
        )}
        disabled={isChangingStatus}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span
          className={styles.base__dot}
          style={{ backgroundColor: currentConfig.dotColor }}
        />
        <span className={styles.base__label}>{currentConfig.label}</span>
        {isChangingStatus ? (
          <svg
            className={styles.base__spinner}
            fill="none"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Loading</title>
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
        ) : (
          <svg
            className={cn(
              styles.base__chevron,
              isOpen && styles['base__chevron--open'],
            )}
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Toggle status menu</title>
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </button>

      {isOpen && !isChangingStatus && (
        <div className={styles.base__dropdown}>
          {AGENT_STATUS_OPTIONS.map((status) => {
            const config = AGENT_STATUS_CONFIG[status];
            const isActive = status === currentStatus;

            return (
              <button
                className={cn(
                  styles.base__option,
                  isActive && styles['base__option--active'],
                )}
                key={status}
                onClick={() => handleStatusChange(status)}
                type="button"
              >
                <span
                  className={styles.base__option_dot}
                  style={{ backgroundColor: config.dotColor }}
                />
                <span className={styles.base__option_label}>
                  {config.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
