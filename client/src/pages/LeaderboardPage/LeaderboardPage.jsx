import { LeaderboardFilter, Pagination, Table } from '@/components';
import { useState } from 'react';
import styles from './LeaderboardPage.module.scss';

const LeaderboardPage = () => {
  const options = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOpt, setSelectedOpt] = useState('all');

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
            options={options}
            selectedOpt={selectedOpt}
            setSelectedOpt={setSelectedOpt}
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
