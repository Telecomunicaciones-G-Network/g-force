import type { TooltipProps } from './tooltip.props';

import { TooltipBase } from './components/tooltip-base';
import { TooltipContent } from './components/tooltip-content';
import { TooltipTrigger } from './components/tooltip-trigger';

export const Tooltip = ({
  className = '',
  children,
  disabled = false,
  ref,
  sideOffset = 4,
  triggerAsChild = false,
  triggerComponent,
  ...rest
}: Readonly<TooltipProps>) => {
  if (!triggerComponent) {
    console.warn(
      'Prop triggerComponent is missing on Tooltip component. This component can not be render appropiately.',
    );
  }

  return (
    <TooltipBase open={disabled ? false : undefined}>
      <TooltipTrigger asChild={triggerAsChild}>
        {triggerComponent}
      </TooltipTrigger>
      <TooltipContent
        className={className}
        ref={ref}
        sideOffset={sideOffset}
        {...rest}
      >
        {children}
      </TooltipContent>
    </TooltipBase>
  );
};
