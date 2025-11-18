export class LoginNotAuthorizedError extends Error {
  public code: string;
  public status: number;

  constructor(message?: string, status?: number) {
    super(
      message || 'El usuario ingresado no existe o la contraseña no es valida.',
    );

    this.code = 'LOGIN_NOT_AUTHORIZED_ERROR';
    this.name = 'LoginNotAuthorizedError';
    this.status = status ?? 401;
  }
}
