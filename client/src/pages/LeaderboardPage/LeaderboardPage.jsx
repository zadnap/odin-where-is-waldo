import { LeaderboardFilter, Pagination, Table } from '@/components';
import { useState } from 'react';
import styles from './LeaderboardPage.module.scss';

const LeaderboardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [playerFilter, setPlayerFilter] = useState('');
  const [mapFilter, setMapFilter] = useState('all');

  return (
    <main className={styles.leaderboardPage}>
      <section
        className={styles.pageSection}
        aria-labelledby="leaderboard-title"
      >
        <h2 className={styles.title} id="leaderboard-title">
          Leaderboard
        </h2>
        <div className={styles.leaderboard}>
          <LeaderboardFilter
            playerFilter={playerFilter}
            mapFilter={mapFilter}
            setPlayerFilter={setPlayerFilter}
            setMapFilter={setMapFilter}
          />
          <Table />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={10}
          />
        </div>
      </section>
    </main>
  );
};

export default LeaderboardPage;
