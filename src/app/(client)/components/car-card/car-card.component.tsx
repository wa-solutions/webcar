import Image from 'next/image';
import { SiHonda } from 'react-icons/si';

import civicImage from '@/assets/examples/honda-civic.png';

import petrolIcon from '@/assets/icons/petrol.svg';
import kmIcon from '@/assets/icons/km.svg';
import engineIcon from '@/assets/icons/engine.svg';

import { Car } from '@/domain/entities/Car';

import styles from './car-card.module.scss';

interface CarCardProps {
  car: Car;
}

export const CarCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={civicImage} alt='Civic' />
      </div>
      <div className={styles.carDetails}>
        <div className={styles.carName}>
          <SiHonda size={16} color='#333' />
          <h3>Civic - 2021</h3>
        </div>
        <div className={styles.carInfoContainer}>
          <div className={styles.carInfo}>
            <Image src={kmIcon}
              alt='Kilometros'
            />
            <span>
              23.000 km
            </span>
          </div>
          <div className={styles.carInfo}>
            <Image src={petrolIcon}
              alt='Gasolina'
            />
            <span>
              Gasolina
            </span>
          </div>
          <div className={styles.carInfo}>
            <Image src={engineIcon}
              alt='Kilometros'
            />
            <span>
              Automatico
            </span>
          </div>
        </div>
        <div className={styles.carPrice}>
          <h2>R$ 54.000</h2>
          <a href="#">ver detalhes</a>
        </div>
      </div>
    </div>
  )
}