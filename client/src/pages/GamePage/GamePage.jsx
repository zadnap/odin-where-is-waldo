import {
  CharacterCard,
  EnterNameModal,
  Error,
  GameMap,
  Loading,
  NotiPopup,
  TimeElapsed,
} from '@/components';
import styles from './GamePage.module.scss';
import { useEffect, useState } from 'react';
import { useElapsed, useLoadGame, useMakeGuess } from '@/hooks/useGame';
import { useNavigate, useParams } from 'react-router';
import {
  getFoundCharacterIds,
  getRemainingCharacters,
} from '@/utils/gameCharacter';
import { useCreateScore } from '@/hooks/useScores';
import { formatTime } from '@/utils/dateTime';

const GamePage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { game: initialGame, gameLoading, gameError } = useLoadGame(slug);
  const { setScoreData } = useCreateScore();
  const [game, setGame] = useState(null);
  const { makeGuess, guessResult } = useMakeGuess(game?.id);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isPlaying = !guessResult?.finished;
  const { elapsed } = useElapsed(game?.startedAt, isPlaying);
  const [notiKey, setNotiKey] = useState(0);

  useEffect(() => {
    if (initialGame) {
      setGame(initialGame);
    }
  }, [initialGame]);

  useEffect(() => {
    if (!guessResult || !guessResult.correct) return;

    setGame((prev) => ({
      ...prev,
      foundCharacters: guessResult.foundCharacters,
    }));

    if (!isPlaying) {
      setIsOpenModal(true);
    }
  }, [guessResult]);

  useEffect(() => {
    if (!guessResult) return;
    setNotiKey((k) => k + 1);
  }, [guessResult]);

  if (gameLoading) return <Loading message="Loading game" />;
  if (gameError) return <Error message="Fail to load game" />;
  if (!game) return null;

  const remainingCharacters = getRemainingCharacters(game);
  const foundCharacterIds = getFoundCharacterIds(game);

  const onSubmit = (name) => {
    setScoreData({ gameId: game.id, playerName: name });
    navigate('/');
  };

  return (
    <>
      <main className={styles.gamePage}>
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
            makeGuess={makeGuess}
            remainingCharacters={remainingCharacters}
            imageUrl={game.map.imageUrl}
            alt={`${game.map.title}'s map`}
          />
        </section>
      </main>

      {guessResult && (
        <NotiPopup
          key={notiKey}
          message={guessResult.correct ? 'Correct guess!' : 'Try again!'}
          variant={guessResult.correct ? 'success' : 'warning'}
        />
      )}

      <TimeElapsed time={formatTime(elapsed)} />

      {isOpenModal && (
        <EnterNameModal onSubmit={onSubmit} onClose={() => navigate('/')} />
      )}
    </>
  );
};

export default GamePage;
