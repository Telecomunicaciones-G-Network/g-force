import type { ButtonProps } from '../../../molecules/buttons/button';

import { MdArrowBack } from 'react-icons/md';

import { Button } from '../../../molecules/buttons/button';

import { cn } from '../../../../utils/cn.util';

export const BackButton = ({
  className = '',
  ...rest
}: Readonly<
  Omit<
    ButtonProps,
    'children' | 'color' | 'isStatic' | 'leftIcon' | 'rightIcon'
  >
>) => (
  <Button
    className={cn('p-0', className)}
    color="transparent"
    isStatic
    {...rest}
  >
    <MdArrowBack className="block min-h-6 min-w-6 size-6 lg:hidden" />
  </Button>
);
