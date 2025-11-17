export class LoginNotAuthorizedError extends Error {
  code: string = 'LOGIN_NOT_AUTHORIZED_ERROR';
  status: number = 401;

  constructor(message?: string, status?: number) {
    super(
      message || 'El usuario ingresado no existe o la contraseña no es valida.',
    );
    this.name = 'LoginNotAuthorizedError';
    this.status = status ?? 401;
  }
}
