import type { ReactTr } from '../../../../types';

import { cn } from '../../../../utils/cn.util';

/**
 * @name TableRow
 *
 * @description Table row component.
 *
 * @extends {ReactTr}
 *
 * @property {string} className - Class name for the table row.
 * @property {ReactNode} children - Children for the table row.
 * @property {Ref<HTMLTableRowElement>} ref - Ref for the table row.
 */
export const TableRow = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<ReactTr>) => {
  if (!children)
    console.warn(
      'Prop children is missing on TableRow component. This component can not be render appropiately.',
    );

  return (
    <tr
      ref={ref}
      className={cn(
        'bg-chromatic divide-x divide-neutral-200 min-h-14 h-14',
        className,
      )}
      {...rest}
    >
      {children}
    </tr>
  );
};
