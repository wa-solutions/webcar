import { SignupForm } from './components/signup-form.component';

import styles from './page.module.scss';

const SignInPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.signinContainer}>
        <div className={styles.signHeader}>
          <h2>Bem vindo ao WebCar Admin</h2>
          <span>Entre com suas credenciais</span>
        </div>
        <SignupForm />
      </div>
    </main>
  );
}

export default SignInPage;