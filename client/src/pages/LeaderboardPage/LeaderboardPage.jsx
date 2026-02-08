import {
  LeaderboardFilter,
  LeaderboardPagination,
  LeaderboardTable,
  Loading,
} from '@/components';
import { useState } from 'react';
import styles from './LeaderboardPage.module.scss';
import { useScores } from '@/hook/useScores';
import { useMaps } from '@/hook/useMaps';

const LeaderboardPage = () => {
  const { maps, mapsLoading, mapsError } = useMaps();
  const [selectedOpt, setSelectedOpt] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { scores, scoresMeta, scoresLoading, scoresError } = useScores({
    page: currentPage,
    mapSlug: selectedOpt,
  });

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
          {!mapsLoading && !mapsError && (
            <LeaderboardFilter
              options={maps}
              selectedOpt={selectedOpt}
              setSelectedOpt={setSelectedOpt}
            />
          )}

          {scoresLoading && <Loading message="Loading leaderboard" />}
          {!scoresLoading && scoresError && (
            <Error message="Fail to load leaderboard" />
          )}
          {!scoresLoading && !scoresError && <LeaderboardTable rows={scores} />}

          {scoresMeta?.totalPages > 0 && (
            <LeaderboardPagination
              currentPage={scoresMeta.page}
              setCurrentPage={setCurrentPage}
              totalPages={scoresMeta.totalPages}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default LeaderboardPage;
