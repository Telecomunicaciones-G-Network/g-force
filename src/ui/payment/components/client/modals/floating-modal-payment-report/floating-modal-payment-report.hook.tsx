'use client';

import { useState } from 'react';

export const useFloatingModalPaymentReport = () => {
  const [successPayment, setSuccessPayment] = useState<boolean>(false);

  const changeToSuccessPayment = () => setSuccessPayment(true);

  return {
    successPayment,
    changeToSuccessPayment,
  };
};
