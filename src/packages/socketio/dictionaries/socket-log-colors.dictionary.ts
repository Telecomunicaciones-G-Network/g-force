import type { SocketLogLevel } from '../types';

export const socketLogColorsDictionary: Record<SocketLogLevel, string> = {
  error: 'color: #ef4444',
  info: 'color: #3b82f6',
  success: 'color: #10b981',
  warn: 'color: #f59e0b',
};
