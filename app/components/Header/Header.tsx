'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
            <h1>AltPay</h1>
        </div>
        
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('how-it-works')}>
            Как это работает
          </button>
          <button onClick={() => scrollToSection('faq')}>
            FAQ
          </button>
          <button onClick={() => scrollToSection('contact')}>
            Связь
          </button>
        </nav>
      </div>
    </header>
  );
} 