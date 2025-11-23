import type { BubbleIconControllerProps } from './bubble-icon-controller.props';

import { MdAccessTime } from 'react-icons/md';
import { MdDone } from 'react-icons/md';
import { MdDoneAll } from 'react-icons/md';
import { MdErrorOutline } from 'react-icons/md';

import { BubbleStatus } from '../../enums/bubble-status.enum';

export const BubbleIconController = ({
  status = 'none',
}: Readonly<BubbleIconControllerProps>) => {
  switch (status) {
    case BubbleStatus.DELIVERED:
      return <MdDoneAll className="min-h-4 min-w-4 self-end size-4" />;
    case BubbleStatus.FAILED:
      return (
        <MdErrorOutline className="fill-warning-300 min-h-4 min-w-4 self-end size-4" />
      );
    case BubbleStatus.PENDING:
      return (
        <MdAccessTime className="fill-tag-blue-foreground min-h-4 min-w-4 self-end size-4" />
      );
    case BubbleStatus.READ:
      return (
        <MdDoneAll className="fill-red-500 min-h-4 min-w-4 self-end size-4" />
      );
    case BubbleStatus.SENT:
      return <MdDone className="min-h-4 min-w-4 self-end size-4" />;
    default:
      return null;
  }
};
