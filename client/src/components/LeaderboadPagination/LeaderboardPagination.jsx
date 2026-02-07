import { Button } from '@/components';
import styles from './LeaderboardPagination.module.scss';

const LeaderboardPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <nav
      aria-label="Leaderboard pages"
      className={styles.leaderboardPagination}
    >
      <p className={styles.pages} aria-live="polite">
        Page <span>{currentPage}</span> of <span>{totalPages}</span>
      </p>
      <ul className={styles.actions}>
        <li>
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default LeaderboardPagination;
