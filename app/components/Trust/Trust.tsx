import styles from './Trust.module.css';

export default function Trust() {
  const trustFactors = [
    {
      icon: '🏢',
      title: 'Зарегистрированная компания в UK',
      description: 'Официально зарегистрированы в Великобритании'
    },
    {
      icon: '📊',
      title: 'Более 670 оплаченных заказов',
      description: 'Успешно обработали множество заявок'
    },
    {
      icon: '💰',
      title: 'Прозрачная комиссия: 100 ₽ + курс',
      description: 'Никаких скрытых платежей'
    },
    {
      icon: '🔒',
      title: 'Безопасность: не храним пароли',
      description: 'Всё выполняется вручную, без рисков'
    },
    {
        icon: '🌍',
        title: 'Поддержка множества сервисов',
        description: 'Spotify, Netflix, iCloud, GitHub, Steam и др.'
    },
    {
        icon: '🏦',
        title: 'Принимаем в ₽',
        description: 'Любой удобный способ оплаты — СБП, карта, крипта'
      }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Почему нам доверяют</h2>
        <p className={styles.subtitle}>
          Мы обеспечиваем безопасность и прозрачность в каждой сделке
        </p>
        
        <div className={styles.trustGrid}>
          {trustFactors.map((factor, index) => (
            <div key={index} className={styles.trustCard}>
              <div className={styles.trustIcon}>{factor.icon}</div>
              <h3 className={styles.trustTitle}>{factor.title}</h3>
              <p className={styles.trustDescription}>{factor.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>670+</div>
            <div className={styles.statLabel}>Успешных заказов</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>5-30</div>
            <div className={styles.statLabel}>Минут на оплату</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100 ₽</div>
            <div className={styles.statLabel}>Фиксированная комиссия</div>
          </div>
        </div>
      </div>
    </section>
  );
} 