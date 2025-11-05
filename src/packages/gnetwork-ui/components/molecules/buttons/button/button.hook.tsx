import type { MouseEvent } from "react";

interface UseButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const useButton = ({ onClick }: UseButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    onClick?.(event);
  };

  return {
    handleClick,
  };
};
