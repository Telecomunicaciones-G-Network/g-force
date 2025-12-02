'use client';

import type { FileInputProps } from './file-input.props';

import { useFileInput } from './file-input.hook';

import { cn } from '../../../../utils/cn.util';

import styles from './file-input.module.css';

export const FileInput = ({
  accept,
  buttonAriaLabel = 'File input picker',
  children,
  className = '',
  disabled = false,
  id,
  multiple = false,
  name,
  onChange,
  onFileSelect,
  ref,
  ...rest
}: FileInputProps) => {
  const { inputRef, handleChange, handleClick } = useFileInput({
    disabled,
    onChange,
    onFileSelect,
  });

  return (
    <button
      aria-label={buttonAriaLabel}
      className={cn(styles.base, 'gap-2 items-center', className)}
      data-disabled={disabled}
      disabled={disabled}
      onClick={handleClick}
      type="button"
    >
      <input
        accept={accept}
        aria-hidden="true"
        className={styles.base__input}
        disabled={disabled}
        id={id}
        multiple={multiple}
        name={name}
        onChange={handleChange}
        ref={ref ? ref : inputRef}
        tabIndex={-1}
        type="file"
        {...rest}
      />
      {children || (
        <span className={styles.defaultTrigger}>
          Selecciona {multiple ? 'los archivos' : 'el archivo'}
        </span>
      )}
    </button>
  );
};
