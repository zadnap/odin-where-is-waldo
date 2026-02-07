import styles from './LeaderboardTable.module.scss';

const LeaderboardTable = ({ rows = [] }) => {
  return (
    <table className={styles.leaderboardTable}>
      <thead className={styles.thead}>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Player</th>
          <th scope="col">Map</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {rows.length === 0 ? (
          <tr>
            <td colSpan="4" className={styles.empty}>
              No results found
            </td>
          </tr>
        ) : (
          rows.map((row) => (
            <tr key={row.id}>
              <th scope="row">{rows.rank}</th>
              <td>{rows.playerName}</td>
              <td>{rows.mapName}</td>
              <td>{rows.timeMs}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;
