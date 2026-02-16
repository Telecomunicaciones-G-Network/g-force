import { z as zod } from 'zod';

export const floatingModalPaymentReportMobilePaymentManualFormDataSchema =
  zod.object({
    amount: zod
      .string()
      .min(1, 'El monto es requerido')
      .refine((val) => parseFloat(val) >= 1.0, {
        message: 'El monto mínimo es de 1.00',
      }),
    phoneNumber: zod
      .string()
      .min(1, 'El número de teléfono es requerido')
      .min(11, 'El número de teléfono no tiene el formato correcto'),
    bankReferenceNumber: zod
      .string()
      .min(1, 'El número de referencia es requerido')
      .min(6, 'Debe ingresar los 6 últimos números del número de referencia'),
    date: zod
      .date()
      .optional()
      .refine((date) => date !== undefined, {
        message: 'La fecha de pago es requerida',
      }),
  });
