export class BadRequestException extends Error {
  code: string = 'BAD_REQUEST_EXCEPTION';
  status: number = 400;

  constructor(message?: string) {
    super(message || 'Bad request');

    this.name = 'BadRequestException';
    this.status = 400;
  }
}
