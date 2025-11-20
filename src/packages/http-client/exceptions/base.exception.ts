// DONE:

import type { HttpExceptionConfig } from '../interfaces';

export class BaseException extends Error {
  code: string = 'BASE_EXCEPTION';
  status: number = 500;

  constructor(config?: HttpExceptionConfig) {
    super(config?.message || 'Unknown error');

    this.name = 'BaseException';
    this.status = config?.status ?? 500;
  }
}
