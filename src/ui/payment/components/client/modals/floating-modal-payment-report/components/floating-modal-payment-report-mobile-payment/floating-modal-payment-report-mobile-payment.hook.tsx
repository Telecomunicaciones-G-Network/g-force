'use client';

import { useRadioGroup } from '@gnetwork-ui/components/organisms/inputs/radio-group/radio-group.hook';

export const useFloatingModalPaymentReportMobilePayment = () => {
  const { value, changeRadioGroupValue } = useRadioGroup();

  return {
    radioGroupValue: value,
    changeRadioGroupValue,
  };
};
