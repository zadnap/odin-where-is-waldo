import styles from './LeaderboardFilter.module.scss';

const LeaderboardFilter = ({ options, selectedOpt, setSelectedOpt }) => {
  return (
    <form className={styles.leaderboardFilter} role="search">
      <label className={styles.field}>
        <span className={`${styles.label} srOnly`}>Map</span>
        <select
          value={selectedOpt}
          onChange={(e) => setSelectedOpt(e.target.value)}
        >
          <option value="">All</option>
          {options.map((opt) => (
            <option key={opt.slug} value={opt.slug}>
              {opt.title}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default LeaderboardFilter;
