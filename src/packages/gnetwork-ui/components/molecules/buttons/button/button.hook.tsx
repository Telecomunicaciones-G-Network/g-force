import type { MouseEvent } from "react";

/**
 * UseButton props.
 *
 * @param onClick - Optional click event handler for the button.
 */
interface UseButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Custom hook to manage button interactions.
 *
 * @param onClick - Optional click event handler for the button.
 * @returns An object with the handleClick function, which
 *          blurs the button after clicking and invokes the provided onClick handler.
 */
export const useButton = ({ onClick }: UseButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    onClick?.(event);
  };

  return {
    handleClick,
  };
};
