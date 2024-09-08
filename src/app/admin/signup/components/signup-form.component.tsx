"use client";

import { useFormState } from 'react-dom';

import { signUp } from '@/actions/auth.action';

import styles from './signup-form.module.scss';

export const SignupForm = () => {
  const [formState, formAction] = useFormState(signUp, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor='name'>Nome</label>
        <input className={styles.formInput} type="text" name="name" id="name" required />
        {formState?.errors?.name && <span className={styles.formError}>{formState.errors.name}</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor='email'>E-mail</label>
        <input className={styles.formInput} type="email" name="email" id="email" required />
        {formState?.errors?.email && <span className={styles.formError}>{formState.errors.email}</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor='password'>Senha</label>
        <input className={styles.formInput} type="password" name="password" id="password" required />
        {formState?.errors?.password && <span className={styles.formError}>{formState.errors.password}</span>}
      </div>
      <div>
        <button className={styles.formButton}>Criar</button>
      </div>
    </form>
  );
}