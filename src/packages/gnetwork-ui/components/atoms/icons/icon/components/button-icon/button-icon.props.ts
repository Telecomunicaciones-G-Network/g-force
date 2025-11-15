import type { PropsWithChildren } from 'react';
import type { IconProps } from '../../icon.props';

export type ButtonIconProps = PropsWithChildren<
  Pick<IconProps, 'className' | 'onClick' | 'size'>
>;
