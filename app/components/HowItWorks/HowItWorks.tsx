import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Вы оставляете заявку',
      description: 'Указываете сумму и сервис',
      icon: '📝'
    },
    {
      number: 2,
      title: 'Оплачиваете рублями',
      description: 'Картой, переводом, СБП или криптой',
      icon: '💳'
    },
    {
      number: 3,
      title: 'Мы оплачиваем сервис',
      description: 'В течение 5–30 минут на Ваш аккаунт или создаем новый',
      icon: '💰'
    }
  ];

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Как это работает</h2>
        <p className={styles.subtitle}>
          Простой и понятный процесс оплаты зарубежных сервисов
        </p>
        
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.arrow}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
} 