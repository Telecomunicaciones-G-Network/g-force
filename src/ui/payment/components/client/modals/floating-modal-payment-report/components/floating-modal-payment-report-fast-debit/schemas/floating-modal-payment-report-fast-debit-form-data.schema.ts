import { z as zod } from 'zod';

export const floatingModalPaymentReportFastDebitFormDataSchema = zod.object({
  amount: zod
    .string()
    .min(1, 'El monto es requerido')
    .refine((val) => parseFloat(val) >= 1.0, {
      message: 'El monto mínimo es de 1.00',
    }),
  bankCode: zod.string().min(1, 'El banco es requerido'),
  phoneNumber: zod
    .string()
    .min(1, 'El número de teléfono es requerido')
    .min(11, 'El número de teléfono no tiene el formato correcto'),
  clientName: zod.string().min(1, 'El nombre del cliente es requerido'),
  documentType: zod.string().min(1, 'El tipo de documento es requerido'),
  documentNumber: zod
    .string()
    .min(1, 'El número de documento es requerido')
    .min(6, 'El número de documento debe tener minimo 6 dígitos')
    .max(9, 'El número de documento debe tener maximo 9 dígitos'),
});
