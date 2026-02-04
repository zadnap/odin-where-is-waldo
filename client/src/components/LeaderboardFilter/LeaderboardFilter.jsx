import { Button } from '@/components';
import styles from './LeaderboardFilter.module.scss';

const LeaderboardFilter = ({
  playerFilter,
  mapFilter,
  setPlayerFilter,
  setMapFilter,
}) => {
  return (
    <form className={styles.leaderboardFilter} role="search">
      <label className={styles.field}>
        <span className={styles.label}>Player</span>
        <input
          type="text"
          placeholder="Search player..."
          value={playerFilter}
          onChange={(e) => setPlayerFilter(e.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Map</span>
        <select
          value={mapFilter}
          onChange={(e) => setMapFilter(e.target.value)}
        >
          <option value="all">All maps</option>
          <option value="Gravity Falls">Gravity Falls</option>
          <option value="Adventure Time">Adventure Time</option>
        </select>
      </label>
      <Button type="submit">Filter</Button>
    </form>
  );
};

export default LeaderboardFilter;
