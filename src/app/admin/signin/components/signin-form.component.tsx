"use client";

import { useFormState } from 'react-dom';

import styles from './signin-form.module.scss';

export const SigninForm = () => {
  return (
    <form>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor='email'>E-mail</label>
          <input className={styles.formInput} type="email" name="email" id="email" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor='password'>Senha</label>
          <input className={styles.formInput} type="password" name="password" id="password" required />
        </div>
        <div className=''>
          <button>Entrar</button>
        </div>
      </form>
    </form>
  )
}