import { createGameApi, makeGuessApi } from '@/services/game.api';
import { useEffect, useState } from 'react';

const useLoadGame = (mapSlug) => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGame = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await createGameApi(mapSlug);

        setGame(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadGame();
  }, [mapSlug]);

  return { game, gameLoading: loading, gameError: error };
};

const useMakeGuess = (gameId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const makeGuess = async ({ x, y, characterId }) => {
    try {
      setLoading(true);
      setError(null);

      const data = await makeGuessApi({
        gameId,
        x,
        y,
        characterId,
      });

      setResult(data);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    makeGuess,
    guessResult: result,
    guessLoading: loading,
    guessError: error,
  };
};

export { useLoadGame, useMakeGuess };
