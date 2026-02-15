/**
 * @name loginFormState
 *
 * @description The state for the login form.
 *
 * @property {string} email - The email.
 * @property {string} password - The password.
 * @property {boolean} rememberSession - Whether to remember the session.
 */
export const loginFormState = {
  email: '',
  password: '',
  // rememberSession: true,
} as const;
