import { getScoresApi } from '@/services/score.api';
import { useState, useEffect } from 'react';

const useScores = ({ mapSlug, page, limit }) => {
  const [scores, setScores] = useState([]);
  const [scoresMeta, setScoresMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadScores = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, meta } = await getScoresApi({ mapSlug, page, limit });

        setScores(data);
        setScoresMeta(meta);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadScores();
  }, [mapSlug, page, limit]);

  return {
    scores,
    scoresMeta,
    scoresLoading: loading,
    scoresError: error,
  };
};

export { useScores };
