import { GameCard } from '@/components';
import styles from './HomePage.module.scss';
import logo from '@/assets/images/logo.png';

const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <section className={styles.pageSection}>
        <img src={logo} alt="Hidden Nostalgia's logo" className={styles.logo} />
        <h2 className={styles.title}>Hidden Nostalgia</h2>
        <p>
          Hidden Nostalgia is a “Where's Waldo?” inspired game that brings back
          the magic of classic Cartoon Network shows. Dive into colorful,
          crowded scenes from your childhood and challenge yourself to spot
          familiar characters hidden in plain sight. Choose a map, test your
          observation skills, and relive the nostalgia—one character at a time.
        </p>
      </section>
      <section className={styles.pageSection}>
        <h2 className={styles.title}>Choose a map</h2>
        <ul className={styles.mapList}>
          <li>
            <GameCard
              imageUrl="https://preview.redd.it/whos-your-least-favorite-gravity-falls-character-and-why-v0-4msg2oanc9kd1.jpeg?auto=webp&s=c2d7c032a863f2d6efe7236b3b3039718271b259"
              title="Gravity Falls"
              slug="gravity-falls"
            />
          </li>
          <li>
            <GameCard
              imageUrl="https://i.redd.it/ta4uxqepek651.png"
              title="Adventure Time"
              slug="adventure-time"
            />
          </li>
          <li>
            <GameCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxxzxMp3gEEtVrtuM7h_65PRPOJZx5opPmA&s"
              title="Phineas and Ferb"
              slug="phineas-and-ferb"
            />
          </li>
          <li>
            <GameCard
              imageUrl="https://i.redd.it/2g82qes3slzx.jpg"
              title="Steven Universe"
              slug="steven-universe"
            />
          </li>
          <li>
            <GameCard
              imageUrl="https://images4.alphacoders.com/113/thumb-1920-1134877.jpg"
              title="Ben 10"
              slug="ben-10"
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
