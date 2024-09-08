'use client';

import styles from './page.module.scss';

export default function CarDetails ({ params }: { params: {carId: string }}) {
  return (
    <main className={styles.main}>
      <h1>Car details: {params.carId}</h1>
    </main>
  );
}