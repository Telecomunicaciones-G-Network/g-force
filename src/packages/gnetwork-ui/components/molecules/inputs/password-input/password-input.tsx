'use client';

import type { InputProps } from '../input';

import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

import { Input } from '../input';

import { usePasswordInput } from './password-input.hook';

export const PasswordInput = (props: Readonly<Omit<InputProps, 'type'>>) => {
  const { showPassword, togglePassword } = usePasswordInput();

  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      rightIcon={
        <button onClick={togglePassword} type="button">
          {showPassword ? (
            <MdOutlineVisibility className="min-h-6 min-w-6" size={24} />
          ) : (
            <MdOutlineVisibilityOff className="min-h-6 min-w-6" size={24} />
          )}
        </button>
      }
      {...props}
    />
  );
};
