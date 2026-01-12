'use client';

import { useState } from 'react';

export const useDatePicker = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  return {
    date,
    open,
    setDate,
    setOpen,
  };
};
