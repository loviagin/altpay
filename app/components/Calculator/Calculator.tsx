'use client';

import { useState } from 'react';
import styles from './Calculator.module.css';

interface CalculationResult {
  amount: number;
  service: string;
  calculatedPrice: number;
  finalPrice: number;
  tgLink: string;
  exchangeRates: {
    usdToKzt: number;
    bynToKzt: number;
    rubToByn: number;
  };
}

export default function Calculator() {
  const [amount, setAmount] = useState('');
  const [service, setService] = useState('spotify');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const services = [
    { value: 'spotify', label: 'Spotify' },
    { value: 'netflix', label: 'Netflix' },
    { value: 'icloud', label: 'iCloud' },
    { value: 'apple', label: 'Apple Store / Apple Music' },
    { value: 'google', label: 'Google One / Google Workspace' },
    { value: 'youtube', label: 'YouTube Premium' },
    { value: 'notion', label: 'Notion' },
    { value: 'github', label: 'GitHub' },
    { value: 'steam', label: 'Steam' },
    { value: 'epic', label: 'Epic Games' },
    { value: 'psn', label: 'PlayStation Store' },
    { value: 'xbox', label: 'Xbox / Game Pass' },
    { value: 'domain', label: 'Домены и хостинг (Namecheap, GoDaddy)' },
    { value: 'aws', label: 'Amazon Web Services (AWS)' },
    { value: 'upwork', label: 'Upwork / Freelancer' },
    { value: 'chatgpt', label: 'ChatGPT / OpenAI' },
    { value: 'cursor', label: 'Cursor' },
    { value: 'claude', label: 'Claude' },
    { value: 'udemy', label: 'Udemy / Coursera' },
    { value: 'adobe', label: 'Adobe (Photoshop, Lightroom и др.)' },
    { value: 'swift', label: 'Переводы (в том числе SWIFT)' },
    { value: 'other', label: 'Другое' }
  ];

  const calculateTotal = async () => {
    const usdAmount = parseFloat(amount);
    if (isNaN(usdAmount) || usdAmount <= 0) {
      setError('Введите корректную сумму');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: usdAmount,
          service: service
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ошибка расчета');
      }

      const data: CalculationResult = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCalculate = () => {
    calculateTotal();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateTotal();
    }
  };

  return (
    <section id="calculator" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Калькулятор стоимости</h2>
        <p className={styles.subtitle}>
          Узнайте стоимость оплаты зарубежного сервиса
        </p>
        
        <div className={styles.calculator}>
          <div className={styles.inputGroup}>
            <label htmlFor="amount" className={styles.label}>
              Сумма в USD
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="0.00"
              className={styles.input}
              min="0"
              step="0.01"
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="service" className={styles.label}>
              Сервис
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={styles.select}
            >
              {services.map((serviceOption) => (
                <option key={serviceOption.value} value={serviceOption.value}>
                  {serviceOption.label}
                </option>
              ))}
            </select>
          </div>
          
          <button 
            onClick={handleCalculate}
            className={styles.calculateButton}
            disabled={!amount || parseFloat(amount) <= 0 || loading}
          >
            {loading ? 'Рассчитываем...' : 'Рассчитать'}
          </button>
          
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}
          
          {result && (
            <div className={styles.result}>
              <div className={styles.resultLabel}>Итого к оплате:</div>
              <div className={styles.resultAmount}>
                {result.finalPrice.toLocaleString('ru-RU')} ₽
              </div>
              <div className={styles.resultBreakdown}>
                <div>Курс USD/KZT: {result.exchangeRates.usdToKzt}</div>
                <div>Курс BYN/KZT: {result.exchangeRates.bynToKzt}</div>
                <div>Курс RUB/BYN: {result.exchangeRates.rubToByn}</div>
              </div>
              
              <div className={styles.telegramSection}>
                <div className={styles.telegramCard}>
                  <div className={styles.telegramIcon}>📱</div>
                  <h3 className={styles.telegramTitle}>Оформить заказ</h3>
                  <p className={styles.telegramDescription}>
                    Перейдите в Telegram для оформления заказа
                  </p>
                  <a 
                    href={result.tgLink ? result.tgLink : 'https://t.me/alt_pay_bot'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.telegramButton}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.13-.02.2z"/>
                    </svg>
                    @Alt_Pay_Bot
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 