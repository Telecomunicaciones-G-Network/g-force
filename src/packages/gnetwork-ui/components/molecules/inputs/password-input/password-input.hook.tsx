import { useState } from 'react';

export const usePasswordInput = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return { showPassword, togglePassword };
};
