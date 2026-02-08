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

export { getScoresApi };
