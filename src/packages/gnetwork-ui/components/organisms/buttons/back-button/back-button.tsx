import type { BackButtonProps } from './back-button.props';

import { MdArrowBack } from 'react-icons/md';

import { Button } from '../../../molecules/buttons/button';

import { cn } from '../../../../utils/cn.util';

export const BackButton = ({
  className = '',
  hide = false,
  ...rest
}: Readonly<BackButtonProps>) => (
  <>
    {!hide && (
      <Button
        className={cn('p-0', className)}
        color="transparent"
        isStatic
        {...rest}
      >
        <MdArrowBack className="block min-h-6 min-w-6 size-6" />
      </Button>
    )}
  </>
);
