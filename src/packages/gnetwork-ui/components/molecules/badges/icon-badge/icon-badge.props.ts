import type { ReactChild, ReactDiv } from '../../../../types';

export interface IconBadgeProps extends Omit<ReactDiv, 'children'> {
  icon: ReactChild;
}
