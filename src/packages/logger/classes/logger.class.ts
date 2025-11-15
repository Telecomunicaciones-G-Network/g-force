import type { LogLevel } from '../types';

import { logLevelColorsDictionary } from '../dictionaries/log-level-colors.dictionary';

import { LogLevels } from '../enums/log-levels.enum';

export class Logger {
  constructor(private readonly name: string) {}

  public log<T = unknown>(
    message: string,
    level: LogLevel = LogLevels.DEFAULT,
    data?: T,
  ) {
    console.log(
      `%c[${this.name}:${level?.toUpperCase()}] ${message}`,
      logLevelColorsDictionary?.[level] ??
        logLevelColorsDictionary[LogLevels.DEFAULT],
      data ?? '',
    );
  }
}
