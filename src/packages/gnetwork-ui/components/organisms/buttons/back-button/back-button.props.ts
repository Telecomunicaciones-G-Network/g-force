import type { ButtonProps } from '../../../molecules/buttons/button';

export interface BackButtonProps
  extends Omit<
    ButtonProps,
    'children' | 'color' | 'isStatic' | 'leftIcon' | 'rightIcon'
  > {
  hide?: boolean;
}
