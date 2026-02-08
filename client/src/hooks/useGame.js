import { createGameApi } from '@/services/game.api';
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

export { useLoadGame };
