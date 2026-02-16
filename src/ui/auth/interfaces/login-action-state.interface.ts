/**
 * @name LoginActionStateErrors
 *
 * @description The errors for the login action state.
 *
 * @property {string[]} email - The errors for the email.
 * @property {string[]} form - The errors for the form.
 * @property {string[]} password - The errors for the password.
 *
 * TODO: Put on login form scope
 */
interface LoginActionStateErrors {
  email?: string[];
  form?: string[];
  password?: string[];
}

/**
 * @name LoginActionState
 *
 * @description The state for the login action.
 *
 * @property {T} data - The data for the login action.
 * @property {LoginActionStateErrors} errors - The errors for the login action.
 * @property {string} message - The message for the login action.
 * @property {boolean} success - The success for the login action.
 *
 * TODO: Set as general interface on auth or package
 */
export interface LoginActionState<T> {
  data?: T;
  errors?: LoginActionStateErrors;
  message?: string;
  success?: boolean;
}
