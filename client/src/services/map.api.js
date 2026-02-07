const API_URL = import.meta.env.VITE_API_URL;

export const getAllMapsApi = async () => {
  const res = await fetch(`${API_URL}/maps`);
  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result.data;
};
