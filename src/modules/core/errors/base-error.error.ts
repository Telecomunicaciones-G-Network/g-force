export class BaseError extends Error {
  code: string = 'BASE_ERROR';
  status: number = 500;

  constructor(message?: string, status?: number) {
    super(message || 'Unknown error');

    this.name = 'BaseError';
    this.status = status ?? 500;
  }
}
