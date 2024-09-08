'use client';
import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { PiHeadphones } from 'react-icons/pi';

import { brandList } from '@/services/brand.service';

import coverImage from '../../assets/cover/one.png';

import { Header } from './components/header/header.component';
import { SectionTitle } from './components/section-title/section-title.component';

import { CarCard } from './components/car-card/car-card.component';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.cover}>
        <Image src={coverImage} alt="audi" />
      </div>
      <section className={styles.sectionSearch}>
        <div className={styles.searchContainer}>
          <div className={styles.searchOptions}>
            <h4 className='active'>Comprar carro</h4>
            <h4>Comprar moto</h4>
          </div>
          <div className={styles.formSearch}>
            <input type="text" placeholder='Ex.: honda civic' />
            <button type='button'><p>Pesquisar</p></button>
          </div>
        </div>
      </section>

      <section className={styles.sectionBrand}>
        <SectionTitle text='Principais marcas'/>
        <div className={styles.brandListContainer}>
          {brandList.map(x => (
            <div className={styles.brandContainer} key={x.name}>
              <div className={styles.brandImage}>
                <Image
                  src={x.image}
                  alt={x.name}
                />
              </div>
              <div className={styles.brandName}>
                <p>{x.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.sectionCarList}>
        <SectionTitle text='Novos carros' />
        <div className={styles.carListContainer}>
          <CarCard key='1' />
          <CarCard key='2' />
        </div>
        <div className={styles.carListFooter}>
          <div className={styles.carListButton}>Veja todas as novidades</div>
        </div>
      </section>

      {/* <section className={styles.sectionBuyCar}>
        <div>
          <div>
            <h1>Você quer vender seu carro?</h1>
            <span>Entre em contato e nós ajudaremos você</span>
          </div>
          <div>
            <div>
              <FaRegCircleCheck size={16} color='#47FF4F' />
              <p>
                Consulta gratuita com preço de mercado
              </p>
            </div>
            <div>
              <FaRegCircleCheck size={16} color='#47FF4F' />
              <p>
                Rapidez na resolução de documentos
              </p>
            </div>
            <div>
              <FaRegCircleCheck size={16} color='#47FF4F' />
              <p>
                100% do dinheiro transferido no momento que o carro for vendido
              </p>
            </div>
            <div>
              <FaRegCircleCheck size={16} color='#47FF4F' />
              <p>
                Consulta gratuita com preço de mercado
              </p>
            </div>
          </div>
          <div>
            <div className={styles.buyButton}>
              <PiHeadphones size={22} color='#333' />
              <p>Entrar em contato</p>
            </div>
          </div>
        </div>
        <div className={styles.imageBuyCarContainer}>
          <Image
            src={buyCarImage}
            alt='comprar carro'
          />
        </div>
      </section>

      <section className={styles.sectionBrandList}>
        <SectionTitle text='Nossas principais marcas' />
      </section> */}
    </main>
  );
}
