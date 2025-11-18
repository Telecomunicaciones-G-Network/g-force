export class ForbiddenException extends Error {
  code: string = 'FORBIDDEN_EXCEPTION';
  status: number = 403;

  constructor(message?: string) {
    super(message || 'No authorized.');

    this.name = 'ForbiddenException';
    this.status = 403;
  }
}
