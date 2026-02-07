import type { BubbleIconControllerProps } from './bubble-icon-controller.props';

import { MdAccessTime } from 'react-icons/md';
import { MdDone } from 'react-icons/md';
import { MdDoneAll } from 'react-icons/md';
import { MdErrorOutline } from 'react-icons/md';

import { cn } from '../../../../../../utils/cn.util';

import { BubbleStatus } from '../../enums/bubble-status.enum';

export const BubbleIconController = ({
  customIconClassName = '',
  status = 'none',
}: Readonly<BubbleIconControllerProps>) => {
  switch (status) {
    case BubbleStatus.DELIVERED:
      return (
        <MdDoneAll
          className={cn('min-h-4 min-w-4 self-end size-4', customIconClassName)}
        />
      );
    case BubbleStatus.FAILED:
      return (
        <MdErrorOutline
          className={cn(
            'fill-warning-300 min-h-4 min-w-4 self-end size-4',
            customIconClassName,
          )}
        />
      );
    case BubbleStatus.PENDING:
      return (
        <MdAccessTime
          className={cn(
            'fill-tag-blue-foreground min-h-4 min-w-4 self-end size-4',
            customIconClassName,
          )}
        />
      );
    case BubbleStatus.READ:
      return (
        <MdDoneAll
          className={cn(
            'fill-red-500 min-h-4 min-w-4 self-end size-4',
            customIconClassName,
          )}
        />
      );
    case BubbleStatus.SENT:
      return (
        <MdDone
          className={cn('min-h-4 min-w-4 self-end size-4', customIconClassName)}
        />
      );
    default:
      return null;
  }
};
