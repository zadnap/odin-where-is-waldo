import styles from './NotiPopup.module.scss';

const NotiPopup = ({ message, variant = 'success' }) => {
  return (
    <div className={`${styles.notiPopup} ${styles[variant]}`}>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default NotiPopup;
