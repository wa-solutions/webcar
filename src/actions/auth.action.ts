"use server";

import { redirect } from 'next/navigation';
import { z } from 'zod';
// export const signUp = (prevState: any, formData: FormData) => {
//   const email = formData.get('email');
//   const password = formData.get('password');
// }
import { hashUserPassword } from '@/lib/hash';

import { createUser } from '@/services/user.service';
import { createSession } from '@/services/auth.service';

type SignInState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  }
  message?: string;
} | undefined;

export const signIn = (prevState: SignInState, formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');
}

type SignUpState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string;
} | undefined;

const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve ter no mínimo 2 caracteres.' })
    .max(255, { message: 'O nome deve ter no máximo 255 caracteres.' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Digite um e-mail válido.' })
    .trim(),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    .trim(),
});

export const signUp = async (prevState: SignUpState, formData: FormData) => {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const validatedFields = SignUpFormSchema.safeParse({
      name,
      email,
      password
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const hashedPassword = hashUserPassword(password);

    const user = await createUser({ name, email, password: hashedPassword });

    console.log(user);
    if (!user) {
      console.log('user not created')
      return
    }

    await createSession(user.id);
    redirect('/admin');
  } catch (error) {

  }
}