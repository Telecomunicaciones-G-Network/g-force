import type { EmptyListMessageProps } from './empty-list-message.props';

import { Text } from '../../../atoms/texts/text';

import { cn } from '../../../../utils/cn.util';

import styles from './empty-list-message.module.css';

/**
 * @name EmptyListMessage
 *
 * @description Component to display a empty list message
 *
 * @property {string} className - Class name to apply to the component
 * @property {string} explanation - Explanation of the empty list message
 * @property {ReactChild} icon - Icon to display in the empty list message
 * @property {string} message - Message to display in the empty list message
 * @property {ReactRef} ref - Ref to apply to the component
 * @property {ReactRest} rest - Rest props to apply to the component
 */
export const EmptyListMessage = ({
  className = '',
  explanation = '',
  icon,
  message = 'No hay registros disponibles por el momento',
  ref,
  ...rest
}: Readonly<EmptyListMessageProps>) => (
  <div
    ref={ref}
    className={cn(styles.base, 'bg-inherit p-4', className)}
    {...rest}
  >
    <div className={styles.base__container}>
      {icon && icon}
      <Text
        as="h5"
        className="text-center text-neutral-900"
        level="xsmall"
        scheme="heading"
      >
        {message}
      </Text>
      {explanation && (
        <Text
          as="p"
          className="text-center text-neutral-600"
          level="small"
          scheme="paragraph"
        >
          {explanation}
        </Text>
      )}
    </div>
  </div>
);
