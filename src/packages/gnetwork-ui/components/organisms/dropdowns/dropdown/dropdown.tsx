'use client';

import type { DropdownProps } from './dropdown.props';

import { DropdownBase } from './components/dropdown-base';
import { DropdownContainer } from './components/dropdown-container';
import { DropdownTrigger } from './components/dropdown-trigger';

export const Dropdown = ({
  children,
  triggerComponent,
  sideOffset = 4,
  ...rest
}: Readonly<DropdownProps>) => {
  console.warn(
    'Prop triggerComponent is missing on Dropdown component. This component can not be render appropiately.',
  );

  return (
    <>
      {triggerComponent && (
        <DropdownBase {...rest}>
          <DropdownTrigger className="cursor-pointer outline-none" asChild>
            {triggerComponent}
          </DropdownTrigger>
          <DropdownContainer sideOffset={sideOffset}>
            {children}
          </DropdownContainer>
        </DropdownBase>
      )}
    </>
  );
};
