import {
  CharacterCard,
  EnterNameModal,
  Error,
  GameMap,
  Loading,
} from '@/components';
import styles from './GamePage.module.scss';
import { useState } from 'react';
import { useLoadGame } from '@/hooks/useGame';
import { useParams } from 'react-router';
import {
  getFoundCharacterIds,
  getRemainingCharacters,
} from '@/utils/gameCharacter';

const GamePage = () => {
  const { slug } = useParams();
  const { game, gameLoading, gameError } = useLoadGame(slug);
  const remainingCharacters = getRemainingCharacters(game);
  const foundCharacterIds = getFoundCharacterIds(game);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <main className={styles.gamePage}>
        {gameLoading && <Loading message="Loading game" />}
        {!gameLoading && gameError && <Error message="Fail to load game" />}
        {!gameLoading && !gameError && (
          <>
            <section className={styles.pageSection}>
              <h2 className={styles.title}>Characters to find</h2>
              <ul className={styles.characterList}>
                {game.map.characters.map((char) => (
                  <li key={char.id}>
                    <CharacterCard
                      imageUrl={char.imageUrl}
                      name={char.name}
                      isFound={foundCharacterIds.has(char.id)}
                    />
                  </li>
                ))}
              </ul>
            </section>
            <section className={styles.pageSection}>
              <GameMap
                remainingCharacters={remainingCharacters}
                imageUrl={game.map.imageUrl}
                alt={`${game.map.title}'s map`}
              />
            </section>
          </>
        )}
      </main>
      {isOpenModal && <EnterNameModal onClose={() => setIsOpenModal(false)} />}
    </>
  );
};

export default GamePage;
