import { useEffect, useRef, useState } from 'react';
import styles from './GameMap.module.scss';
import TargetBox from '../TargetBox/TargetBox';

const GameMap = ({ imageUrl, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.gameMapContainer}>
      <img
        src={imageUrl}
        alt={alt}
        onClick={handleImageClick}
        className={styles.gameMap}
      />
      {isOpen && (
        <TargetBox
          position={position}
          characters={[
            {
              name: 'Bill Cipher',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQ2Hr2O5Gd_tR4hfPSSGGibx3Qoo7QgFHmQ&s',
            },
            {
              name: 'Dipper',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbiUEFu79qkTQeQyMeOUMfSL0cBzaOC1_tg&s',
            },
            {
              id: 'mabel',
              name: 'Mabel',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAls_UxAA8fIZByC67xSrIpEBgzyzL2r8ww&s',
            },
          ]}
        />
      )}
    </div>
  );
};

export default GameMap;
