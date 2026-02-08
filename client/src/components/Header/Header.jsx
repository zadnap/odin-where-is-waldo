import { Link } from 'react-router';
import styles from './Header.module.scss';

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
      <p className={styles.timeClock}>Time Elapsed: 3:99s</p>
    </header>
  );
};

export default Header;
