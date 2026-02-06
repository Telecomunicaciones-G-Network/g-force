import type { ReactTd } from '../../../../types';

/**
 * @name TableColumn
 *
 * @description Table column component.
 *
 * @extends {ReactTd}
 *
 * @property {string} className - Class name for the table column.
 * @property {ReactChild} children - Children for the table column.
 * @property {Ref<HTMLTableDataCellElement>} ref - Ref for the table column.
 */
export const TableColumn = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<ReactTd>) => {
  if (!children)
    console.warn(
      'Prop children is missing on TableColumn component. This component can not be render appropiately.',
    );

  return (
    <td
      ref={ref}
      className="font-medium px-4 py-2 text-neutral-500 text-sm whitespace-nowrap"
      {...rest}
    >
      {children}
    </td>
  );
};
