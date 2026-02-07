import styles from './Error.module.scss';
import errorIcon from '@/assets/images/error-icon.png';

const Error = ({ message = 'Something went wrong' }) => {
  return (
    <div
      className={styles.error}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className={styles.icon} aria-hidden="true">
        <img src={errorIcon} alt="" />
      </span>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Error;
