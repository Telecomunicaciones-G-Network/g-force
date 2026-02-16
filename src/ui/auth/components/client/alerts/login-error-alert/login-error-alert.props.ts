/**
 * @name LoginErrorAlertProps
 *
 * @description The props for the login error alert component.
 *
 * @property {string} message - The message to display in the alert.
 * @property {VoidFunction} onClose - The function to call when the alert is closed.
 */
export interface LoginErrorAlertProps {
  message?: string;
  onClose?: VoidFunction;
}
