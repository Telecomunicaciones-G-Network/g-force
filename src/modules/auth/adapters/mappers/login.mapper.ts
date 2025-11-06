export class LoginMapper {
  static mapTo(output: { email: string; password: string }): {
    email: string;
    password: string;
  } {
    return {
      email: output.email,
      password: output.password,
    };
  }
}
