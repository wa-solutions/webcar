import styles from './section-title.module.scss';

interface SectionTitleProps {
  text: string;
}

export const SectionTitle = ({ text }: SectionTitleProps) => (
  <div className={styles.container}>
    <div>
      <h2>{text}</h2>
      <div className={styles.line}></div>
    </div>
  </div>
)