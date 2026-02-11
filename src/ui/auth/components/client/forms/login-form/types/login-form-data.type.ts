import { z as zod } from 'zod';

import { loginFormSchema } from '../schemas/login-form.schema';

/**
 * @name LoginFormData
 *
 * @description The data for the login form.
 *
 * @type {zod.infer<typeof loginFormSchema>}
 */
export type LoginFormData = zod.infer<typeof loginFormSchema>;
