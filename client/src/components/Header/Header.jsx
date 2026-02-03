import { Link } from 'react-router';
import styles from './Header.module.scss';
import { Button } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav aria-label="Main navigation" className={styles.navigation}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <Button variant="outline">
          <FontAwesomeIcon icon={faMoon} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
