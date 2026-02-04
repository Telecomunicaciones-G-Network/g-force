import { z as zod } from 'zod';

/**
 * @name createTicketFormSchema
 *
 * @description Schema to validate the create ticket form data.
 *
 * @property {zod.ZodString} department - The department.
 * @property {zod.ZodString} description - The description.
 * @property {zod.ZodString} issue - The issue.
 *
 * @returns {zod.ZodObject<CreateTicketFormData>} - The schema to validate the create ticket form data.
 */
export const createTicketFormSchema = zod.object({
  department: zod.string().min(1, 'Debe seleccionar un departamento'),
  description: zod.string().min(1, 'Debe ingresar una descripción'),
  issue: zod.string().min(1, 'Debe seleccionar un asunto'),
});
