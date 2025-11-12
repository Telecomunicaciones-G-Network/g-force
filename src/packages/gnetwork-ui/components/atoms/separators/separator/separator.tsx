import type { ReactHr } from '../../../../types';

import { cn } from '../../../../utils/cn.util';

export const Separator = ({
  className = '',
  ref,
  ...rest
}: Readonly<ReactHr>) => (
  <hr
    className={cn(className, 'text-neutral-200 max-w-full')}
    ref={ref}
    {...rest}
  />
);
