import type { ReactTr } from '../../../../types';

import { cn } from '../../../../utils/cn.util';

/**
 * @name TableHeaderRow
 *
 * @description Table header row component.
 *
 * @extends {ReactTr}
 *
 * @property {string} className - Class name for the table header row.
 * @property {ReactNode} children - Children for the table header row.
 * @property {Ref<HTMLTableRowElement>} ref - Ref for the table header row.
 */
export const TableHeaderRow = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<ReactTr>) => {
  if (!children)
    console.warn(
      'Prop children is missing on TableHeaderRow component. This component can not be render appropiately.',
    );

  return (
    <tr
      ref={ref}
      className={cn('divide-x divide-neutral-200 min-h-10 h-10', className)}
      {...rest}
    >
      {children}
    </tr>
  );
};
