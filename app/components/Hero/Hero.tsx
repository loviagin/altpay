'use client';

import styles from './Hero.module.css';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Платите за зарубежные сервисы — рублями
          </h2>
          <p className={styles.subtitle}>
            Мы оплачиваем за вас Spotify, Netflix, iCloud, ChatGPT, Cursor, а также товары, просто переводы и многое другое. 
            Без блокировок, без VPN.
          </p>
          <button 
            className={styles.ctaButton}
            onClick={() => scrollToSection('calculator')}
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
} 