import type { ReactTh } from '../../../../types';

import { cn } from '../../../../utils/cn.util';

/**
 * @name TableHeaderColumn
 *
 * @description Table header column component.
 *
 * @extends {ReactTh}
 *
 * @property {string} className - Class name for the table header column.
 * @property {ReactChild} children - Children for the table header column.
 * @property {Ref<HTMLTableHeaderCellElement>} ref - Ref for the table header column.
 */
export const TableHeaderColumn = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<ReactTh>) => {
  if (!children)
    console.warn(
      'Prop children is missing on TableHeaderColumn component. This component can not be render appropiately.',
    );

  return (
    <th
      ref={ref}
      className={cn(
        'font-medium px-4 py-2 text-left text-neutral-600 text-sm',
        className,
      )}
      {...rest}
      scope="col"
    >
      {children}
    </th>
  );
};
