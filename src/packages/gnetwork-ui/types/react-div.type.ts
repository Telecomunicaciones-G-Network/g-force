import type { ComponentProps, ReactNode, Ref } from 'react';

export type ReactDiv = ComponentProps<'div'> & {
  className?: string;
  children?: ReactNode | ReactNode[];
  ref?: Ref<HTMLDivElement>;
};
