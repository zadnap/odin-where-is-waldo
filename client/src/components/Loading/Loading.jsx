import styles from './Loading.module.scss';
import loadingIcon from '@/assets/images/loading-icon.png';

const Loading = ({ message = 'Reality is loading...' }) => {
  return (
    <div
      className={styles.loading}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className={styles.icon} aria-hidden="true">
        <img src={loadingIcon} alt="" />
      </span>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Loading;
