'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Сколько времени занимает оплата?',
      answer: 'Обычно 5–30 минут после получения ₽. Мы стараемся обрабатывать заявки максимально быстро.'
    },
    {
      question: 'Как я могу оплатить вам?',
      answer: 'Картой, СБП, криптой или по договорённости. Мы принимаем различные способы оплаты для вашего удобства.'
    },
    {
      question: 'Что если я не доверяю?',
      answer: 'Можно начать с оплаты на $1. Мы открыты и готовы доказать свою надежность на практике.'
    },
    {
      question: 'Какие сервисы вы поддерживаете?',
      answer: 'Spotify, Netflix, iCloud, Google One, Notion, GitHub, Steam, домены и хостинг, а также любые другие зарубежные сервисы. Для Вашего удобства оплачиваем услуги и подписки на Ваш аккаунт или создаем новый.'
    },
    {
      question: 'Есть ли скрытые комиссии?',
      answer: 'Нет, комиссия фиксированная: 100 ₽ + актуальный курс валют. Никаких скрытых платежей.'
    },
    {
      question: 'Что делать, если оплата не прошла?',
      answer: 'Свяжитесь с нами в Telegram @Alt_Pay_Bot. Мы решим проблему и вернем деньги, если что-то пойдет не так.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Часто задаваемые вопросы</h2>
        <p className={styles.subtitle}>
          Ответы на самые популярные вопросы
        </p>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${openIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg 
                  className={`${styles.arrow} ${openIndex === index ? styles.rotated : ''}`}
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 