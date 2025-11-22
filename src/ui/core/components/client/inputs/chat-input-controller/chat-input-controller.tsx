'use client';

import type { FieldValues } from 'react-hook-form';
import type { ChatInputControllerProps } from './chat-input-controller.props';

import { Controller } from 'react-hook-form';

import { ChatInput } from '@gnetwork-ui/components/molecules/inputs/chat-input';

export const ChatInputController = <T extends FieldValues = FieldValues>({
  control,
  defaultValue,
  id,
  name,
  onClear,
  rules,
  ...rest
}: Readonly<ChatInputControllerProps<T>>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field, fieldState }) => (
      <ChatInput
        {...field}
        error={!!fieldState.error}
        id={id || name}
        message={fieldState.error?.message}
        onChange={(e) => {
          field.onChange(e);
          onClear?.();
        }}
        {...rest}
      />
    )}
    rules={rules}
  />
);
