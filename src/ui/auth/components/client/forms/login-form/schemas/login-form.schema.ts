import { z as zod } from 'zod';

import { EMAIL_REGEX } from '@regexs/email.regex';

/**
 * @name loginFormSchema
 *
 * @description The schema for the login form.
 *
 * @property {zod.ZodString} email - The email.
 * @property {zod.ZodString} password - The password.
 */
export const loginFormSchema = zod.object({
  email: zod
    .string()
    .min(1, 'El email es requerido')
    .regex(EMAIL_REGEX, 'El email no es válido'),
  password: zod
    .string()
    .min(1, 'La contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});
