import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Digite um e-mail válido.' })
    .trim(),
  password: z
    .string()
    .trim(),
});