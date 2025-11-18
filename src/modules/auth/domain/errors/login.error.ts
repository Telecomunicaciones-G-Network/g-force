export class LoginError extends Error {
  public code: string;
  public name: string;
  public status: number;

  constructor(message?: string, status?: number) {
    super(message || 'Ha ocurrido un error al iniciar sesión.');

    this.code = 'LOGIN_GENERAL_ERROR';
    this.name = 'LoginGeneralError';
    this.status = status ?? 500;
  }
}
