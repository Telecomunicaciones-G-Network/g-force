import type {
  Control,
  FieldValues,
  RegisterOptions,
  Path,
} from 'react-hook-form';
import type { CheckboxProps } from '@gnetwork-ui/components/molecules/inputs/checkbox';

/**
 * @interface CheckboxControllerProps
 *
 * @description The props for the CheckboxController component.
 */
export interface CheckboxControllerProps<T extends FieldValues = FieldValues>
  extends Omit<CheckboxProps, 'defaultValue' | 'name' | 'checked'> {
  /**
   * @description The control object for the form.
   */
  control: Control<T>;

  /**
   * @description The method to clear the error.
   */
  onClear?: () => void;

  /**
   * @description The rules for the controller.
   */
  rules?: RegisterOptions<T>;

  /**
   * @description The name of the input.
   */
  name: Path<T>;

  /**
   * @description The default value of the input.
   */
  defaultValue?: boolean;
}
