import { useEffect, useState } from 'react';
import styles from './NotiPopup.module.scss';

const NotiPopup = ({ message, variant = 'success', duration = 2000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(t);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`${styles.notiPopup} ${styles[variant]}`}>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default NotiPopup;
