import type { ReactDiv } from '../../../../types/react-div.type';
import type { CardProps } from '../../../atoms/cards/card/card.props';

export interface FloatingCardModalProps extends ReactDiv {
  cardProps?: Omit<CardProps, 'children'>;
}
