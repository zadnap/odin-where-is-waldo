const API_URL = import.meta.env.VITE_API_URL;

const getGameApi = async (gameId) => {
  const res = await fetch(`${API_URL}/games/${gameId}`);
  const result = res.json();

  if (!res.ok) {
    throw result;
  }

  return result.data;
};

const createGameApi = async (mapSlug) => {
  const res = await fetch(`${API_URL}/games/${mapSlug}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result.data;
};

const makeGuessApi = async ({ gameId, x, y, characterId }) => {
  const res = await fetch(`${API_URL}/games/${gameId}/guess`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ x, y, characterId }),
  });
  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result.data;
};

export { getGameApi, createGameApi, makeGuessApi };
