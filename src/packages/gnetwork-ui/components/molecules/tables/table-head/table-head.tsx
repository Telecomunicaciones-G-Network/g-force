import type { ReactThead } from '../../../../types';

/**
 * @name TableHead
 *
 * @description Table header component.
 *
 * @extends {ReactThead}
 *
 * @property {string} className - Class name for the table header.
 * @property {ReactChild} children - Children for the table header.
 * @property {Ref<HTMLTableSectionElement>} ref - Ref for the table header.
 */
export const TableHead = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<ReactThead>) => {
  if (!children)
    console.warn(
      'Prop children is missing on TableHead component. This component can not be render appropiately.',
    );

  return (
    <thead ref={ref} className={className} {...rest}>
      {children}
    </thead>
  );
};
