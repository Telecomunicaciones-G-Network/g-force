import { iconDictionary } from './dictionaries/icon.dictionary';

export interface IconProps {
  className?: string;
  color?: string;
  fillColor?: string;
  height?: number | string;
  name: keyof typeof iconDictionary;
  onClick?: VoidFunction;
  rotate?: number;
  size?: number | string;
  width?: number | string;
}
