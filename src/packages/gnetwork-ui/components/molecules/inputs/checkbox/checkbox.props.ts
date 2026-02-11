import type { InputHTMLAttributes } from 'react';

/**
 * @name CheckboxProps
 *
 * @description The props for the Checkbox component.
 */
export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * @description The label for the checkbox.
   */
  label?: string;
}
