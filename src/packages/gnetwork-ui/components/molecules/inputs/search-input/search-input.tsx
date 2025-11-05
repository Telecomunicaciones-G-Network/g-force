import type { InputProps } from "../input";

import { MdOutlineSearch } from "react-icons/md";

import { Input } from "../input";

import { cn } from "../../../../utils/cn.util";

import styles from "./search-input.module.css";

/**
 * Search input component.
 *
 * @param className - The class name.
 * @param onFocus - The focus event handler.
 * @param onBlur - The blur event handler.
 * @param rest - The rest.
 */
export const SearchInput = ({
  className = "",
  error = false,
  onFocus,
  onBlur,
  ...rest
}: Readonly<InputProps>) => {
  return (
    <Input
      className={cn(styles.base, className)}
      error={error}
      leftIcon={
        <MdOutlineSearch
          className={cn(
            styles.base__icon,
            "text-input-placeholder",
            error && "text-warning-200",
          )}
          size={24}
        />
      }
      onBlur={onBlur}
      onFocus={onFocus}
      {...rest}
    />
  );
};
