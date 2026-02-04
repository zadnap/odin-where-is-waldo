import { CharacterCard, GameMap } from '@/components';
import styles from './GamePage.module.scss';

const GamePage = () => {
  return (
    <main className={styles.gamePage}>
      <section className={styles.pageSection}>
        <h2 className={styles.title}>Characters to find</h2>
        <ul className={styles.characterList}>
          <li>
            <CharacterCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HPzfl8F80-6TfjqWgBaaz7No8ihTaBL4xg&s"
              name="Bubblegum"
              isFound
            />
          </li>
          <li>
            <CharacterCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wii3zz-q8treomKViN0suQgnxRCIGyiAZA&s"
              name="Lady Rainicorn"
            />
          </li>
          <li>
            <CharacterCard
              imageUrl="https://preview.redd.it/marceline-is-best-adventure-time-character-v0-wykgnlp7pvzd1.jpg?width=640&crop=smart&auto=webp&s=20484a2b871e353ac8f34a43a293f95aa5425bd2"
              name="Marceline"
            />
          </li>
        </ul>
      </section>
      <section className={styles.pageSection}>
        <GameMap
          imageUrl="https://i.redd.it/ta4uxqepek651.png"
          alt="adventure time's game"
        />
      </section>
    </main>
  );
};

export default GamePage;
