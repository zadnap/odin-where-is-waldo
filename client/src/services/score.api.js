const API_URL = import.meta.env.VITE_API_URL;

const getScoresApi = async ({ mapSlug, page = 1, limit = 10 } = {}) => {
  const res = await fetch(
    `${API_URL}/scores?mapSlug=${mapSlug}&page=${page}&limit=${limit}`
  );
  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return { data: result.data, meta: result.meta };
};

const createScoreApi = async ({ gameId, playerName }) => {
  const res = await fetch(`${API_URL}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ gameId, playerName }),
  });
  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result.data;
};

export { getScoresApi, createScoreApi };
