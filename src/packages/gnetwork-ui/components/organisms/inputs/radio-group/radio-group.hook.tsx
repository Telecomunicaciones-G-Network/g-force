'use client';

import { useState } from 'react';

export const useRadioGroup = () => {
  const [value, setValue] = useState<string>();

  const changeRadioGroupValue = (value: string) => {
    setValue(value);
  };

  return {
    changeRadioGroupValue,
    value,
  };
};
