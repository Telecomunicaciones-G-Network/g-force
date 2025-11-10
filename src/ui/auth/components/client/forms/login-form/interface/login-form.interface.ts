import { z as zod } from "zod";

import { loginFormSchema } from "../schemas/login-form.schema";

export type LoginFormData = zod.infer<typeof loginFormSchema>;
