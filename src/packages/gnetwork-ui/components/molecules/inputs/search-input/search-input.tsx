import type { InputProps } from "../input";

import { MdOutlineSearch } from "react-icons/md";

import { Input } from "../input";

/**
 * Search input component.
 *
 * @param className - The class name.
 * @param rest - The rest.
 */
export const SearchInput = ({
  className = "",
  ...rest
}: Readonly<InputProps>) => (
  <Input
    className={className}
    leftIcon={<MdOutlineSearch size={24} />}
    {...rest}
  />
);
