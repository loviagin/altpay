'use client';

import { useState, useEffect } from 'react';
import styles from './Reviews.module.css';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const reviews = [
    {
      username: 'Иван',
      text: 'Оплатили Spotify за 15 минут! Очень удобно и быстро. Рекомендую!',
      rating: 5
    },
    {
      username: 'Мария',
      text: 'Netflix работает отлично, никаких проблем. Спасибо AltPay!',
      rating: 5
    },
    {
      username: 'Алексей',
      text: 'Пользуюсь уже 3 месяца, всё стабильно. Лучший сервис для оплаты зарубежных подписок.',
      rating: 5
    },
    {
      username: 'Дмитрий',
      text: 'Оплатил ChatGPT за 10 минут! Очень удобно и быстро. Рекомендую!',
      rating: 5
    }
  ];

  // Определяем количество видимых карточек в зависимости от размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 480) {
          setVisibleCards(1);
        } else if (window.innerWidth <= 768) {
          setVisibleCards(2);
        } else {
          setVisibleCards(3);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= reviews.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? reviews.length - visibleCards : prev - 1
    );
  };

  // Calculate transform based on card width and gap
  const getCardWidth = () => {
    if (typeof window === 'undefined') return 350; // Default for SSR
    if (window.innerWidth <= 480) return 260;
    if (window.innerWidth <= 768) return 280;
    return 350;
  };

  const getGap = () => {
    if (typeof window === 'undefined') return 32; // Default for SSR
    if (window.innerWidth <= 480) return 12; // 0.75rem
    if (window.innerWidth <= 768) return 16; // 1rem
    return 32; // 2rem
  };

  const cardWidth = getCardWidth();
  const gap = getGap();
  const totalCardWidth = cardWidth + gap;
  const transformX = currentIndex * totalCardWidth;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы клиентов</h2>
        <p className={styles.subtitle}>
          После оставления заявки и вы сможете оставить отзыв о нас!
        </p>
        
        <div className={styles.carouselContainer}>
          <button 
            className={styles.carouselButton} 
            onClick={prevSlide}
            aria-label="Предыдущий отзыв"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className={styles.reviewsCarousel}>
            <div 
              className={styles.reviewsTrack}
              style={{ transform: `translateX(-${transformX}px)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.username}>{review.username}</div>
                    <div className={styles.stars}>{renderStars(review.rating)}</div>
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className={styles.carouselButton} 
            onClick={nextSlide}
            aria-label="Следующий отзыв"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className={styles.dots}>
          {Array.from({ length: Math.max(1, reviews.length - visibleCards + 1) }, (_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
        
        <div className={styles.telegramSection}>
          <div className={styles.telegramCard}>
            <div className={styles.telegramIcon}>📱</div>
            <h3 className={styles.telegramTitle}>Оставить заявку в Telegram</h3>
            <p className={styles.telegramDescription}>
              Быстро и удобно через нашего бота
            </p>
            <a 
              href="https://t.me/alt_pay_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.telegramButton}
            >
              @Alt_Pay_Bot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 