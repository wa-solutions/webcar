import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

import profileImg from '@/assets/admin/undraw_profile.svg';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <nav className={styles.main}>
      <div className={styles.control__container}>
        <div className={styles.control__circle}>
          <FaArrowLeft />
        </div>
      </div>
      <div className={styles.profile__container}>
        <Image src={profileImg} alt='Foto de perfil' fill />
      </div>
    </nav>
  );
}