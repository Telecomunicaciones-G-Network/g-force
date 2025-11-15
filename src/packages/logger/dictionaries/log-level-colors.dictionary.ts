import type { LogLevel } from '../types';

export const logLevelColorsDictionary: Record<LogLevel, string> = {
  default: 'color: #9ca3af',
  error: 'color: #ef4444',
  info: 'color: #3b82f6',
  success: 'color: #10b981',
  warning: 'color: #f59e0b',
};
