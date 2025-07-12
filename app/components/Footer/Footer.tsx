import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>AltPay</h3>
            <p className={styles.description}>
              Зарегистрированная компания в Великобритании
            </p>
            <div className={styles.companyInfo}>
              <p><u><a href='https://find-and-update.company-information.service.gov.uk/company/16203160' target='_blank'>Company №16203160</a></u></p>
              <p>© 2025 AltPay. Все права защищены.</p>
            </div>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Контакты</h4>
            <div className={styles.contacts}>
              <a href="mailto:altpay@lovigin.com" className={styles.contactLink}>
                📧 altpay@lovigin.com
              </a>
              <a href="https://t.me/alt_pay_bot" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                📱 @Alt_Pay_Bot
              </a>
              <a href="https://find-and-update.company-information.service.gov.uk/company/16203160" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                🏢 Проверить регистрацию
              </a>
            </div>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Сервисы</h4>
            <div className={styles.services}>
              <span className={styles.service}>Spotify</span>
              <span className={styles.service}>Netflix</span>
              <span className={styles.service}>iCloud</span>
              <span className={styles.service}>Google One</span>
              <span className={styles.service}>Notion</span>
              <span className={styles.service}>GitHub</span>
              <span className={styles.service}>Steam</span>
              <span className={styles.service}>Домены</span>
            </div>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.bottom}>
          <div className={styles.trust}>
            <span className={styles.trustItem}>🔒 Безопасно</span>
            <span className={styles.trustItem}>⚡ Быстро</span>
            <span className={styles.trustItem}>💰 Прозрачно</span>
          </div>
          <div className={styles.cta}>
            <a 
              href="https://t.me/alt_pay_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 