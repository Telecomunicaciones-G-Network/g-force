import type { ChatInputProps } from './chat-input.props';

import { useCallback, useEffect, useRef } from 'react';
import { MdAttachFile } from 'react-icons/md';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { Input } from '../input';
import { getInputClassNames } from '../input/input.style';

import styles from '../input/input.module.css';

export const ChatInput = ({
  customLeftIcon,
  hideLeftIcon = false,
  multiline = true,
  ...rest
}: Readonly<ChatInputProps>) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const autoResize = useCallback((el: HTMLTextAreaElement | null) => {
    if (!el) return;
    el.style.height = 'auto';
    const lineHeight = 20;
    const maxHeight = lineHeight * 5;
    const newHeight = Math.min(el.scrollHeight, maxHeight);
    el.style.height = `${newHeight}px`;
  }, []);

  const leftIcon =
    hideLeftIcon && !multiline
      ? undefined
      : customLeftIcon || <MdAttachFile className="text-neutral-500 size-6" />;

  const {
    className = '',
    containerClassName = '',
    disabled = false,
    error = false,
    fullWidth,
    id,
    isStatic = false,
    label = '',
    message = '',
    name,
    noErrorHandler = false,
    noMessageHandler = false,
    readOnly = false,
    required = false,
    rightIcon,
    onChange,
    onInput,
    ref,
    ...textareaProps
  } = rest as ChatInputProps &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> & { ref?: never };

  const { value, ...restTextareaProps } =
    textareaProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  const handleChange = onChange as unknown as
    | React.ChangeEventHandler<HTMLTextAreaElement>
    | undefined;
  const handleInput = onInput as unknown as
    | React.FormEventHandler<HTMLTextAreaElement>
    | undefined;

  const classes = getInputClassNames({
    className,
    error: noErrorHandler ? false : error,
    fullWidth,
    isStatic: !!(isStatic || readOnly),
  });

  useEffect(() => {
    if (!textareaRef.current) return;

    if (value === '' || value === undefined || value === null) {
      textareaRef.current.style.height = 'auto';
    }

    autoResize(textareaRef.current);
  }, [value, autoResize]);

  if (!id || !name) {
    console.warn(
      'Prop id or name is missing on ChatInput component. This component can not be render appropiately.',
    );
  }

  if (!multiline) {
    return (
      <Input
        leftIcon={leftIcon}
        type="text"
        hideLeftIcon={hideLeftIcon}
        {...rest}
      />
    );
  }

  return (
    <div
      className={cn(
        styles.base,
        fullWidth && 'w-full',
        containerClassName,
        disabled ? 'opacity-50 cursor-not-allowed' : '',
      )}
    >
      {label && (
        <label
          className={cn(styles.base__label, 'text-chromatic-inverted')}
          htmlFor={id || name}
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className={cn(classes)}>
        {leftIcon && !hideLeftIcon && (
          <div className="self-end flex items-end">{leftIcon}</div>
        )}
        <textarea
          ref={(el: HTMLTextAreaElement | null) => {
            textareaRef.current = el;
            autoResize(el);
          }}
          className={cn(
            styles.base__input,
            'font-medium text-base text-chromatic-inverted text-left placeholder:text-input-placeholder resize-none',
          )}
          disabled={disabled}
          id={id}
          name={name}
          readOnly={readOnly || disabled}
          rows={1}
          value={value ?? ''}
          onChange={(event) => {
            autoResize(event.currentTarget);
            handleChange?.(event);
          }}
          onInput={(event) => {
            autoResize(event.currentTarget);
            handleInput?.(event);
          }}
          {...(restTextareaProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
        {rightIcon && rightIcon}
      </div>
      {message && !noMessageHandler && (
        <span
          className={cn(
            styles.base__message,
            'text-chromatic-inverted',
            noErrorHandler ? false : error && 'text-warning-200',
          )}
        >
          {message}
        </span>
      )}
    </div>
  );
};
