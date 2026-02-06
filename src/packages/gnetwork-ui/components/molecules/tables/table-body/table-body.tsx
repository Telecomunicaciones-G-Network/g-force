import type { ReactTbody } from '../../../../types';

/**
 * @name TableBody
 *
 * @description Table body component.
 *
 * @extends {ReactTbody}
 *
 * @property {string} className - Class name for the table body.
 * @property {ReactChild} children - Children for the table body.
 * @property {Ref<HTMLTableSectionElement>} ref - Ref for the table body.
 */
export const TableBody = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<ReactTbody>) => {
  if (!children)
    console.warn(
      'Prop children is missing on TableBody component. This component can not be render appropiately.',
    );

  return (
    <tbody ref={ref} className="divide-y divide-neutral-200" {...rest}>
      {children}
    </tbody>
  );
};
