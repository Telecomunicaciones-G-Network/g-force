'use client';

import type { ButtonProps } from './button.props';

import { Slot } from '@radix-ui/react-slot';

import { useButton } from './button.hook';

import { getButtonClassNames } from './button.style';

import styles from './button.module.css';

export const Button = ({
  asChild = false,
  children,
  className = '',
  color,
  fullWidth,
  isStatic,
  leftIcon,
  loading = false,
  onClick,
  ref,
  rightIcon,
  scheme,
  size,
  type = 'button',
  ...rest
}: Readonly<ButtonProps>) => {
  const classes = getButtonClassNames({
    className,
    color,
    fullWidth,
    scheme,
    size,
    isStatic,
  });
  const Comp = asChild ? Slot : 'button';
  const { handleClick } = useButton({ onClick });

  if (!children) {
    console.warn(
      'Prop children is missing on Button component. This component can not be render appropiately.',
    );
  }

  return (
    <Comp
      className={classes}
      onClick={handleClick}
      ref={ref}
      type={type}
      {...rest}
    >
      {loading && (
        <div className={styles.base__spinner_container}>
          <div
            className={`${styles.base__spinner} ${styles.base__spinner_wide}`}
          ></div>
        </div>
      )}
      {!loading && (
        <>
          {leftIcon && <Slot>{leftIcon}</Slot>}
          {children}
          {rightIcon && <Slot>{rightIcon}</Slot>}
        </>
      )}
    </Comp>
  );
};
