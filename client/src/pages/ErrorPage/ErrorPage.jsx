import { Link } from 'react-router';
import styles from './ErrorPage.module.scss';
import loadingIcon from '@/assets/images/loading-icon.png';

const ErrorPage = () => {
  return (
    <main className={styles.errorPage}>
      <img className={styles.icon} src={loadingIcon} alt="" />
      <p className={styles.message}>
        The page you are looking for is not found
      </p>
      <Link to="/" className={styles.homepageLink}>
        Go back to home page
      </Link>
    </main>
  );
};

export default ErrorPage;
