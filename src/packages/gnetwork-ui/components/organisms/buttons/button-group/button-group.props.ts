import type { ReactDiv } from '../../../../types';
import type { ButtonProps } from '../../../molecules/buttons/button';
import type { DropdownProps } from '../../dropdowns/dropdown/dropdown.props';

export interface ButtonGroupButton extends ButtonProps {
  id: string;
  isActive?: boolean;
  isDropdown?: boolean;
  dropdownProps?: Omit<DropdownProps, 'triggerComponent'>;
}

export interface ButtonGroupProps extends Omit<ReactDiv, 'children'> {
  buttons: ButtonGroupButton[];
}
