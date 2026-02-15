import type { HttpExceptionConfig } from '../interfaces';

/**
 * @class BaseException
 *
 * @description This exception is the base exception for all exceptions.
 *
 * @property {string} code - The code of the exception.
 * @property {number} status - The status of the exception.
 */
export class BaseException extends Error {
  code: string = 'BASE_EXCEPTION';
  status: number = 500;

  /**
   * constructor
   */
  constructor(config?: HttpExceptionConfig) {
    super(config?.message || 'Unknown error');

    this.name = 'BaseException';
    this.status = config?.status ?? 500;
  }
}
