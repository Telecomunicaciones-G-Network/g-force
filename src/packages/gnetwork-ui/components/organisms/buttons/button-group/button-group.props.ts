import type { ReactDiv } from '../../../../types';
import type { ButtonProps } from '../../../molecules/buttons/button';

/**
 * ButtonGroupButton interface
 *
 * Interface for a button configuration object in the ButtonGroup component.
 *
 * @param {string} id - Unique identifier for the button
 * @param {boolean} [isActive] - Whether the button is active (default: true)
 * @param {ButtonProps} [rest] - Additional props spread to the button component
 */
export interface ButtonGroupButton extends ButtonProps {
  id: string;
  isActive?: boolean;
}

/**
 * ButtonGroupProps interface
 *
 * Props for the ButtonGroup component.
 *
 * @param {ButtonGroupButton[]} buttons - Array of button configuration objects (required)
 * @param {string} [className] - Additional class names for the group container
 * @param {React.Ref<HTMLDivElement>} [ref] - Reference to the group container element
 * @param {object} [rest] - Additional props spread to the container div
 */
export interface ButtonGroupProps extends Omit<ReactDiv, 'children'> {
  buttons: ButtonGroupButton[];
}
