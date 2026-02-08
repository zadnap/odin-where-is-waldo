import { getAllMapsApi } from '@/services/map.api';
import { useState, useEffect } from 'react';

const useMaps = () => {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMaps = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getAllMapsApi();

        setMaps(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadMaps();
  }, []);

  return { maps, mapsLoading: loading, mapsError: error };
};

export { useMaps };
