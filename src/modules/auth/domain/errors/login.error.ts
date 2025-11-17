export class LoginError extends Error {
  code: string = 'LOGIN_GENERAL_ERROR';
  status: number = 500;

  constructor(message?: string, status?: number) {
    super(message || 'Ha ocurrido un error al iniciar sesión.');
    this.name = 'LoginGeneralError';
    this.status = status ?? 500;
  }
}
