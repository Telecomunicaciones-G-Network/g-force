import type { ReactButton } from '../../../../types'; /**
 * CollapsibleButtonProps
 *
 * @property [className] - Additional class names to apply to the button.
 * @property [ref] - Ref to access the button element.
 * @property [isCollapsed] - Whether the button is collapsed.
 */
export interface CollapsibleButtonProps
  extends Omit<ReactButton, 'defaultValue'> {
  isCollapsed?: boolean;
}
