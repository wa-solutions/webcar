// import { SectionTitle } from '../components/section-title/section-title.component';

import styles from './page.module.scss';

export default function AboutUs () {
  return (
    <main className={styles.main}>
      <section className={styles.sectionPresentation}>
        <h1>Bem vindo a WebCar</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis officiis
          mollitia quod quam temporibus veniam natus facilis nihil maxime accusamus
          amet sequi quidem placeat velit, reiciendis tempore enim voluptates unde.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis officiis
          mollitia quod quam temporibus veniam natus facilis nihil maxime accusamus
          amet sequi quidem placeat velit, reiciendis tempore enim voluptates unde.
        </p>
      </section>
      <section className={styles.sectionMission}>

      </section>
    </main>
  );
}