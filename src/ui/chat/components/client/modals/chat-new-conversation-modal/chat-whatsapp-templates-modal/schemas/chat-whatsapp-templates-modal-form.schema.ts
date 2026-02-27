import { z as zod } from 'zod';

/**
 * @name sendWhatsappTemplateFormSchema
 *
 * @description Schema to validate the WhatsApp send-template form data.
 *
 * @property {zod.ZodString} phoneNumber - The destination phone number (digits only, min 7).
 * @property {zod.ZodString} templateId  - The id of the selected template (required).
 * @property {zod.ZodRecord}  params      - Dynamic map of {{N}} param values, each required.
 *
 * @returns {zod.ZodObject} - The schema.
 */
export const sendWhatsappTemplateFormSchema = zod.object({
  phoneNumber: zod
    .string()
    .min(1, 'El número de WhatsApp es requerido')
    .min(7, 'Debe ingresar un número válido (mínimo 7 dígitos)')
    .regex(/^\d+$/, 'Solo se permiten números'),

  templateId: zod.string().min(1, 'Debe seleccionar una plantilla'),

  /**
   * Each key is the stringified param index ("1", "2", …) and must be a
   * non-empty string.  We use a record with a refine at the form level
   * instead of here, because the set of keys is only known at runtime.
   */
  params: zod.record(
    zod.string(),
    zod.string().min(1, 'Este valor es requerido'),
  ),
});

export type SendWhatsappTemplateFormData = zod.infer<
  typeof sendWhatsappTemplateFormSchema
>;
