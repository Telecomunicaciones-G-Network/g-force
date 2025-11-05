import { iconDictionary } from "./dictionaries/icon.dictionary";

/**
 * Icon props.
 *
 * @param className - The class name.
 * @param color - The color.
 * @param name - The name.
 * @param onClick - The onClick.
 * @param size - The size.
 */
export interface IconProps {
  className?: string;
  color?: string;
  name: keyof typeof iconDictionary;
  onClick?: () => void;
  size?: number | string;
}
