'use client';

import { FloatingModalPaymentReportFormLayout } from '../../layouts/floating-modal-payment-report-form-layout';

import styles from './floating-modal-payment-report-mobile-payment.module.css';

export const FloatingModalPaymentReportMobilePayment = () => (
  <FloatingModalPaymentReportFormLayout label="Págo Movil">
    <div className={styles.base__input}>input</div>
  </FloatingModalPaymentReportFormLayout>
);
