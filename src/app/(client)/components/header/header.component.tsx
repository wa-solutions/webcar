'use client';
import React from 'react';
import Link from 'next/link';

import { Offcanvas } from 'react-bootstrap';
import { RiMenu2Line } from 'react-icons/ri';

import styles from './header.module.scss';

export const Header = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.mobileMenuButton}>
        <RiMenu2Line size={28} color='#333' onClick={() => setShowMenu(true)} />
      </div>
      <div className={styles.logoContainer}>
        <h2>WEB</h2>
        <h2>CAR</h2>
      </div>
      <div className={styles.menuContainer}>
        <a href="/">Home</a>
        <a href="/cars">Veículos</a>
        <a href="/valuation">Avaliação</a>
        <Link href="/about-us">Quem somos</Link>
      </div>
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.mobileLink}>Home</div>
          <div className={styles.mobileLink}>Veículos</div>
          <div className={styles.mobileLink}>Avaliação</div>
          <div className={styles.mobileLink}>Quem somos</div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}