const formatTime = (timeMs = 0) => {
  if (typeof timeMs !== 'number' || timeMs < 0) return '00:00.000';

  const minutes = Math.floor(timeMs / 60000);
  const seconds = Math.floor((timeMs % 60000) / 1000);
  const milliseconds = timeMs % 1000;

  return (
    String(minutes).padStart(2, '0') +
    ':' +
    String(seconds).padStart(2, '0') +
    '.' +
    String(milliseconds).padStart(3, '0')
  );
};

export { formatTime };
