import { iconDictionary } from './dictionaries/icon.dictionary';

export interface IconProps {
  className?: string;
  color?: string;
  name: keyof typeof iconDictionary;
  onClick?: () => void;
  rotate?: number;
  size?: number | string;
}
