import type { FloatingCardModalProps } from './floating-card-modal.props';

import { Card } from '../../../atoms/cards/card';
import { FloatingModal } from '../floating-modal';

export const FloatingCardModal = ({
  cardProps,
  children,
  ...rest
}: Readonly<FloatingCardModalProps>) => {
  return (
    <FloatingModal className="max-w-[min(349px,100%)] w-full" {...rest}>
      <Card className="gap-0 p-0 rounded-sm shadow-lg w-full" {...cardProps}>
        {children}
      </Card>
    </FloatingModal>
  );
};
