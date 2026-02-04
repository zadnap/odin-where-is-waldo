import styles from './Table.module.scss';

const Table = ({ rows = [] }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Player</th>
          <th scope="col">Map</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {rows.map((row) => (
          <tr key={row.id}>
            <th scope="row">1</th>
            <td>Bill Cipher</td>
            <td>Gravity Falls</td>
            <td>01:32</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
