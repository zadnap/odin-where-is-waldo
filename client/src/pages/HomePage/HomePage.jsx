import { Error, GameCard, Loading } from '@/components';
import styles from './HomePage.module.scss';
import logo from '@/assets/images/logo.png';
import { useMaps } from '@/hook/useMaps';

const HomePage = () => {
  const { maps, mapsLoading, error } = useMaps();

  return (
    <main className={styles.homePage}>
      <section className={styles.pageSection}>
        <img src={logo} alt="Where's Waldo's logo" className={styles.logo} />
        <h2 className={styles.title}>Where's Waldo</h2>
        <p>
          This is a “Where's Waldo?” - inspired game that challenges your
          observation and attention to detail. Explore large, detailed scenes
          filled with dozens of characters and objects, and search carefully to
          find specific targets hidden within the crowd. Select a map, race
          against the clock, and see how quickly you can spot everything. Simple
          to play, but tricky to master.
        </p>
      </section>
      <section className={styles.pageSection}>
        <h2 className={styles.title}>Choose a map</h2>
        {mapsLoading && <Loading message="Loading maps" />}
        {!mapsLoading && error && <Error message="Fail to load maps" />}
        {!mapsLoading && !error && (
          <ul className={styles.mapList}>
            {maps.map((map) => (
              <li key={map.id}>
                <GameCard
                  imageUrl={map.imageUrl}
                  title={map.title}
                  slug={map.slug}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default HomePage;
