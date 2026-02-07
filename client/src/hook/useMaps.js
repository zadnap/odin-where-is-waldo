import { getAllMapsApi } from '@/services/map.api';
import { useState, useEffect } from 'react';

const useMaps = () => {
  const [maps, setMaps] = useState([]);
  const [mapsLoading, setMapsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMaps = async () => {
      try {
        setMapsLoading(true);
        setError(null);

        const data = await getAllMapsApi();

        setMaps(data);
      } catch (err) {
        setError(err);
      } finally {
        setMapsLoading(false);
      }
    };

    loadMaps();
  }, []);

  return { maps, mapsLoading, error };
};

export { useMaps };
