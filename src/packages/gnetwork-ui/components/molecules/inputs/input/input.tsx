import type { InputProps } from './input.props';

import { cn } from '../../../../utils/cn.util';

import { getInputClassNames } from './input.style';

import styles from './input.module.css';

export const Input = ({
  className = '',
  containerClassName = '',
  error = false,
  fullWidth,
  id,
  isStatic = false,
  label = '',
  leftIcon,
  message = '',
  name,
  readOnly = false,
  ref,
  required = false,
  rightIcon,
  type = 'text',
  ...rest
}: Readonly<InputProps>) => {
  const classes = getInputClassNames({
    className,
    error,
    fullWidth,
    isStatic: !!(isStatic || readOnly),
  });

  if (!id || !name) {
    console.warn(
      'Prop id or name is missing on Input component. This component can not be render appropiately.',
    );
  }

  return (
    <div className={cn(styles.base, fullWidth && 'w-full', containerClassName)}>
      {label && (
        <label
          className={cn(styles.base__label, 'text-chromatic-inverted')}
          htmlFor={id || name}
        >
          {label} {required ? ' *' : ''}
        </label>
      )}
      <div className={cn(classes)}>
        {leftIcon && leftIcon}
        <input
          className={cn(
            styles.base__input,
            'font-medium text-base text-chromatic-inverted text-left placeholder:text-input-placeholder',
          )}
          id={id}
          name={name}
          readOnly={readOnly}
          ref={ref}
          type={type}
          {...rest}
        />
        {rightIcon && rightIcon}
      </div>
      {message && (
        <span
          className={cn(
            styles.base__message,
            'text-chromatic-inverted',
            error && 'text-warning-200',
          )}
        >
          {message}
        </span>
      )}
    </div>
  );
};
