import type { LogLevel } from '../types';

export interface HttpLoggerAdapter {
  log<T = unknown>(message: string, level: LogLevel, data?: T): void;
}
