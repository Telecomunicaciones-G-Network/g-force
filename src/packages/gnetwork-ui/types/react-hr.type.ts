import type { ComponentProps, Ref } from 'react';

export type ReactHr = ComponentProps<'hr'> & {
  className?: string;
  ref?: Ref<HTMLHRElement>;
};
