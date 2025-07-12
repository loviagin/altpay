import styles from './Services.module.css';

export default function Services() {
  const services = [
    { name: 'Spotify', logo: '🎵', color: '#1DB954' },
    { name: 'Netflix', logo: '🎬', color: '#E50914' },
    { name: 'Apple / iCloud', logo: '🍎', color: '#000000' },
    { name: 'Google One', logo: '🔍', color: '#4285F4' },
    { name: 'Notion', logo: '📝', color: '#000000' },
    { name: 'ChatGPT', logo: '💻', color: '#181717' },
    { name: 'Steam', logo: '🎮', color: '#171a21' },
    { name: 'Domains / Hosting', logo: '🌐', color: '#0066cc' },
    { name: 'Переводы / SWIFT', logo: '💳', color: '#0066cc' },
    { name: 'Custom', logo: '⚙️', color: '#6b7280' }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Поддерживаемые сервисы</h2>
        <p className={styles.subtitle}>
          Мы оплачиваем популярные зарубежные сервисы и подписки
        </p>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.name} 
              className={styles.serviceCard}
              style={{ '--service-color': service.color } as React.CSSProperties}
            >
                <a href='#calculator'>
                    <div className={styles.serviceLogo}>{service.logo}</div>
                    <h3 className={styles.serviceName}>{service.name}</h3>
                </a>
            </div>
          ))}
        </div>
        
        <div className={styles.note}>
          <p>
            <strong>Не нашли нужный сервис?</strong> Мы можем оплатить любой зарубежный сервис. 
            Просто укажите его в заявке.
          </p>
        </div>
      </div>
    </section>
  );
} 