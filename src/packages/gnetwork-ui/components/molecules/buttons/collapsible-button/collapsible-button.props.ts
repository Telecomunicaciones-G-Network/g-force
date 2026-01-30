import type { ReactButton } from '../../../../types';

/**
 * @name CollapsibleButtonProps
 *
 * @property {string} [className] - Additional class names to apply to the button.
 * @property {React.Ref<HTMLButtonElement>} [ref] - Ref to access the button element.
 * @property {boolean} [isCollapsed] - Whether the button is collapsed.
 */
export interface CollapsibleButtonProps
  extends Omit<ReactButton, 'defaultValue'> {
  isCollapsed?: boolean;
}
