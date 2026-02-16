'use client';

import { useState } from 'react';

export const useSwitch = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleSwitch = () => setIsChecked(!isChecked);

  const changeSwitch = (newCheckedState: boolean) =>
    setIsChecked(newCheckedState);

  return {
    changeSwitch,
    isChecked,
    toggleSwitch,
  };
};
